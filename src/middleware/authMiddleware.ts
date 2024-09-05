import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/user/jwtUtil';



function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = verifyToken(token);
        req.body.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token.');
    }
}

export { authMiddleware };