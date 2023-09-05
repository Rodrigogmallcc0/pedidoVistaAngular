# Etapa de construcción (Build Stage)
FROM node:16 AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli@16.1.4

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código de la aplicación al directorio de trabajo
COPY . .

# Compilar la aplicación Angular para producción
RUN ng build --prod

# Etapa de producción
FROM nginx:latest

# Copiar los archivos de la aplicación Angular compilada desde la etapa de construcción a la carpeta HTML de Nginx
COPY --from=build /app/dist/pedido /usr/share/nginx/html

# Exponer el puerto 80 (puerto predeterminado para el tráfico HTTP)
EXPOSE 80

# Iniciar Nginx para servir la aplicación Angular
CMD ["nginx", "-g", "daemon off;"]