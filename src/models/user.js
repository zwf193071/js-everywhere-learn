const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            index: { unique: true } // 在数据库独一无二，没有重复的
        },
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        }
    },
    {
        // Assigns createdAt and updatedAt fields with a Date type
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;