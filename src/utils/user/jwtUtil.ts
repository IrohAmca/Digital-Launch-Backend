import jwt from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';

const envPath = path.resolve(__dirname, '../../../.env');

dotenv.config({ path: envPath });

const secretKey = process.env.JWT_SECRET_KEY as string;

function generateToken(payload: object): string {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function verifyToken(token: string): any {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw new Error('Invalid token');
    }
}

export { generateToken, verifyToken };