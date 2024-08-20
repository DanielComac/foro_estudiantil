import {Router} from 'express';
import { getUsers, updateUser } from '../controllers/user.controller.js';
import {auth} from '../middlewares/validateToken.js';


const router = Router();

router.get('/users', auth, getUsers);

router.patch('/users/:id', auth, updateUser);

export default router;