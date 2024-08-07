import {Router} from 'express';
import {registro, login, logout, verifyToken} from '../controllers/auth.controller.js';

const router = Router();

router.post('/registro', registro);

router.post('/login', login);

router.post('/logout', logout);

router.get('/verify', verifyToken);


export default router