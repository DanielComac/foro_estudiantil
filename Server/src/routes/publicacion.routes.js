import {Router} from 'express';
import {getPublicaciones, getPublicacion, postPublicacion, putPublicacion, deletePublicacion} from '../controllers/publicacion.controller.js';

import {auth} from '../middlewares/validateToken.js';


const router = Router();

router.get('/publicaciones', auth, getPublicaciones);

router.get('/publicaciones/:id', auth, getPublicacion);

router.post('/publicaciones', auth, postPublicacion);

router.put('/publicaciones/:id', auth, putPublicacion);

router.delete('/publicaciones/:id', auth, deletePublicacion);

export default router;

