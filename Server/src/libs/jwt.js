import jwt from 'jsonwebtoken';
import {SECRET} from '../config.js';

export function crearTokenAcceso(payload) {
   return new Promise((resolve, reject) => {
    jwt.sign(
        payload,
        SECRET,
        {
            expiresIn: "1d",
        },
        (err, token) => {
            if(err) reject(err)
                resolve(token)
        } 
    )
   })

}
