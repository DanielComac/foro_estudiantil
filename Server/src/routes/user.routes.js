import {Router} from 'express';
import { getUsers } from '../controllers/user.controller.js';
import {auth} from '../middlewares/validateToken.js';


const router = Router();

router.get('/users', auth, getUsers);

export default router;