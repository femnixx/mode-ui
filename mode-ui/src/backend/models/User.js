const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique: false,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// hash password before saving user
UserSchemaSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// method to compare passwords
UserSchema.methods.matchPassword = async function(enteredPassword) {
    return  await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);