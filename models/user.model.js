const mongoose = require("mongoose");
const bcrypt = require("bcrypt");



const userSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Types.ObjectId,
            default: new mongoose.Types.ObjectId()
        },
        firstName: String,
        lastName: String,
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true
        },
        age: {
            type: Number,
            default: 18
        },
        password: {
            type: String,
            default: "password"
        }
    },
    {
        timestamps: true
        //createdAt
        //updatedAt
    }
);


userSchema.pre('save', function (next) {
    this.__v = 1;
    this.password = bcrypt.hashSync(this.password, 10)
    console.log(this);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = { User }