import { Request, Response } from 'express';
import { generateToken } from '../../utils/user/jwtUtil';
import { findUserByEmailAndPassword } from '../../services/auth/authServices';

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await findUserByEmailAndPassword(email, password);
    if (!user) {
        return res.status(400).send('Invalid email or password.');
    }

    if (user.role !== 'company-admin') {
        return res.status(403).send('Access denied. Not a company admin.');
    }

    const token = generateToken({ id: user.id, role: user.role });
    res.status(200).send({ token });
}