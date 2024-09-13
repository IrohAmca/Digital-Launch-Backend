import {Router} from 'express';
import insertRouters from './launch/insertData';
import getRouters from './launch/getLaunch';
import deleteRouters from './launch/deleteData';
import s3delete from './s3/s3delete';
import s3post from './s3/s3post';
import getUser from './launch/loginAdmin';
import galleryGet from './gallery/galleryGet';
import insertPlacement from './launch/insertPlacement';
import insertComponent from './launch/insertComponent';
import updateComponent from './launch/updateComponent';
import updatePlacement from './launch/updatePlacement';

const router = Router();

router.use('/api', insertRouters);
router.use('/api', getRouters);
router.use('/api', deleteRouters);
router.use('/api', insertComponent);
router.use('/api', updateComponent);
router.use('/api', s3delete);
router.use('/api', s3post);
router.use('/api', getUser);
router.use('/api', galleryGet);
router.use('/api', insertPlacement);
router.use('/api', updatePlacement);

export default router;