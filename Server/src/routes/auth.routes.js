import {Router} from 'express';
import {registro, login, logout} from '../controllers/auth.controller.js';
import {publicacion} from '../controllers/publicacion.controller.js';

const router = Router();

router.post('/registro', registro);

router.post('/login', login);

router.post('/logout', logout);

router.post('/publicacion', publicacion);


export default router