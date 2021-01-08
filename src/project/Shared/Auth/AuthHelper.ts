import jwt from 'jsonwebtoken';
import config from '../../../config';
import { IUser } from "../../../interfaces/IUser";
import crypto from 'crypto';

export class AuthHelper {
    static generateToken(user: IUser) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);

        return jwt.sign(
            {
                _id: user._id,
                name: user.name,
                exp: exp.getTime() / 1000,
            },
            config.jwtSecret
        )
    }

    static validPassword(user: IUser, password: string): boolean {
        const hash = crypto.pbkdf2Sync(password,
            user.salt, 1000, 64, `sha512`).toString(`hex`);

        return user.password === hash;
    }
}