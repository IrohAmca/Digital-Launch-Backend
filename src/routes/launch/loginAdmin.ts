import {Router} from 'express';
import bodyParser from 'body-parser';
import { login } from '../../controller/auth/authController';

const router = Router();
router.use(bodyParser.json());

router.post('/login', login);

export default router;