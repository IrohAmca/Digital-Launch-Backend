import {Router} from 'express';
import { updatePlacement } from '../../controller/update/placementUpdate';
import bodyParser from 'body-parser';

const router = Router();

router.use(bodyParser.json());

router.put('/update-placement', updatePlacement);

export default router;