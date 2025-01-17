import mongoose, { Schema } from "mongoose";

const UserScheme = new Schema( {
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    Password: {
        type: String,
        required : true
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

const UserModel = mongoose.model('user', UserScheme);
export default UserModel;