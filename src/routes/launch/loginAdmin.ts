import { Router } from 'express';
import bodyParser from 'body-parser';
import { findUserByEmailAndPassword } from '../../services/auth/authServices';
import { generateToken } from '../../utils/user/jwtUtil';
import { warn, info, error } from '../../utils/logger/logger';

const router = Router();
router.use(bodyParser.json());

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmailAndPassword(email, password);
        if (!user) {
            warn('--Login: Invalid email or password.', req);
            return res.status(400).send('Invalid email or password.');
        }

        if (user.role !== 'company-admin') {
            warn('--Login: Access denied. Not a company admin.', req);
            return res.status(403).send('Access denied. Not a company admin.');
        }

        const token = generateToken({ id: user.id, role: user.role });
        info('--Login: User logged in successfully.', req);
        res.status(200).send({ token });
    }
    catch (err) {
        error('Error in login:' + err);
        res.status(500).send('Internal Server Error');
    }
})

export default router;