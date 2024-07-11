import express from 'express';
import morgan from 'morgan';

import router from './routes/auth.routes.js';
import routerPublicaciones from './routes/publicacion.routes.js';
import routerComentarios from './routes/comentario.routes.js'

import cookieParser from 'cookie-parser';


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);
app.use("/api", routerPublicaciones);
app.use("/api", routerComentarios);


export default app;