import axios from 'axios';
import path from 'path';
import dotenv from 'dotenv';

const envPath = path.resolve(__dirname, '../../../.env');

dotenv.config({ path: envPath });

const API_URL = process.env.API_URL as string;

interface LoginData {
    email: string;
    password: string;
}

async function findUserByEmailAndPassword(email: string, password: string): Promise<any> {
    const data: LoginData = { email, password };
    try {
        const response = await axios.post(API_URL, data, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw `Error logging in:, ${error}`
    }
}

export { findUserByEmailAndPassword };