import { configDotenv } from "dotenv"
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5173;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

// mongoDB connection
mongoose.connect(MONGO_URI).then(() => console.log('MongoDB connected successfully')).catch(err => console.error('MongoDB connection error: ', err));

// basic test route
app.get('/', (req, res) => {
    res.send('Backend API is running');
});

// start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})