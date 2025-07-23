import express from 'express';
import User from '../models/User.js';
const router = express.Router();

// route post signup
router.post('/signup', async (req, res) => {
    // Destructure all fields received from the frontend
    const { firstName, lastName, email, password } = req.body;

    // Use email as username for consistency with your User model's 'username' field
    const username = email;

    // Basic validation (optional, but good practice)
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields for signup.' });
    }

    try {
        // Check if username (which is email) already exists
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'A user with this username (email) already exists.' });
        }

        // Check if email already exists (even though username check often covers it if username=email)
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ message: 'A user with this email already exists.' });
        }

        // Create the user. The password hashing will be handled by the pre('save') hook in User.js.
        const user = await User.create({
            firstName,
            lastName,
            username, // Pass the email as username
            email,
            password // The pre-save hook will hash this
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error('SERVER ERROR during signup:', error);
        // Improve error messages based on common Mongoose errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: messages.join(', ') });
        }
        if (error.code === 11000) { // MongoDB duplicate key error (for unique fields)
            let field = Object.keys(error.keyValue)[0];
            return res.status(400).json({ message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.` });
        }
        res.status(500).json({ message: 'Internal Server Error during signup. Please try again.', details: error.message });
    }
});

// route post login
router.post('/login', async (req, res) => {
    // For login, your frontend currently sends email and password,
    // and your User model expects username for finding.
    // So, we use 'email' from the request body as the 'username' for finding.
    const { email, password } = req.body;
    const username = email; // Use email as the username for lookup

    try {
        const user = await User.findOne({ username }); // Find user by username (which is email)

        if (!user) {
            return res.status(401).json({ message: 'User not found or email does not exist' }); // Changed message to reflect email
            
        }

        // Use the matchPassword method from the User model to compare
        if (await user.matchPassword(password)) {
            res.json({
                message: 'Login successful',
                user: {
                    id: user._id,
                    firstName: user.firstName, // Include firstName and lastName in login response
                    lastName: user.lastName,
                    username: user.username,
                    email: user.email
                },
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password!' }); // Changed message to reflect email
        }
    } catch (err) {
        console.error('SERVER ERROR during login:', err);
        res.status(500).json({ message: 'Internal server error during login. Please try again.', details: err.message });
    }
});

export default router;