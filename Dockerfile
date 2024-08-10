# Usar una imagen base de Node.js
FROM node:16-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 4173

# Comando para correr la aplicación con --host 0.0.0.0
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
