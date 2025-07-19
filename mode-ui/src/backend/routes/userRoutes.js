const express = require('express');
const router = express.Router();
const User = require('../models/User');

// route post 
router.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const userExists = await User.findOne({username});
        const emailExists = await User.findOne({email});
        if (userExists) {
            return res.status(400).json({ message: 'Username already exists' });
        } if (emailExists) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const user = await User.create({
            username, password, email
        });
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error: ', error });
    }
        
});

// route post login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && (await user.matchPassword(password))) {
            res.json({
                message: 'Login successfull',
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                },
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error: ', err});
    }
});

module.exports = router;
