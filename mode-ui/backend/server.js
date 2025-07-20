import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

// import auth routes
import authRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('Error: MONGO_URI not found in .env file!');
    process.exit(1);
}

app.use(cors());
app.use(express.json());

// mongoDB connection
mongoose.connect(MONGO_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error: ', err));

// basic test route
app.get('/', (req, res) => {
    res.send('Backend API is running');
});

//use auth routes
app.use('/api/auth', authRoutes);

// start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})