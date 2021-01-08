import { IUser } from '../../interfaces/IUser';
import mongoose, { Document } from 'mongoose';
import crypto from 'crypto';

interface IPasswordUser {
    setPassword(password: String): void;
}

const User = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a full name'],
            index: true,
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            index: true,
        },
        password: String,
        salt: String
    },
    { timestamps: true },
);

User.methods.setPassword = function(password: string): void {
    this.salt = crypto.randomBytes(32).toString('hex');

    this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

export default mongoose.model<IUser & Document & IPasswordUser>('User', User);