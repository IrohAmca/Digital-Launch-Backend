import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/user/jwtUtil';
import { info, warn, error } from '../utils/logger/logger';

function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (!token) {
        warn('Access denied. No token provided.', req);
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = verifyToken(token);
        req.body.user = decoded;
        next();
    } catch (err) {
        error('Internal Server Error' + err, req);
        res.status(400).send('Internal Server Error' + err);
    }
}

export { authMiddleware };