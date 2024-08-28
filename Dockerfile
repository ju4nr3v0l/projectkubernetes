# Usar una imagen base de Node.js
FROM --platform=linux/amd64 node:14-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de package y package-lock
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para correr la app
CMD ["node", "index.js"]
