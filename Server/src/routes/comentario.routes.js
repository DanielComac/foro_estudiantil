import {Router} from 'express';
import {getComentarios, getComentario, postComentario, putComentario, deleteComentario} from '../controllers/comentario.controller.js';

import {auth} from '../middlewares/validateToken.js';

const router = Router();

router.get('/comentarios', auth, getComentarios);

router.get('/comentarios/:id', auth, getComentario);

router.post('/comentarios', auth, postComentario);

router.put('/comentarios/:id', auth, putComentario);

router.delete('/comentarios/:id', auth, deleteComentario);

export default router;

