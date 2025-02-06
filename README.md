## BACKEND SALUDIFY ⚕️

SALUDIFY es un proyecto de backend construido con Node.js y Express, que proporciona una API RESTful para integrarse fácilmente con aplicaciones frontend. Utiliza MongoDB como sistema de gestión de bases de datos y está optimizado para entornos tanto de desarrollo como de producción.

## 🐱‍👤 Características

    Conexión con la base de datos MongoDB Atlas.
    Soporte para integraciones seguras a través de diferentes orígenes.
    Validación de datos utilizando express-validator.
    Autenticación y autorización con JSON Web Tokens (JWT).
    Cifrado de contraseñas mediante bcryptjs.




## 🔑 Seguridad

Este proyecto contiene las siguientes medidas de seguridad:

    Cifrado de contraseñas.
    Generación y validación de tokens JWT.
    Validación de entradas con express-validator.



## 🚀 Instalación
1. Clonar el repositorio

2. Navegar al directorio del proyecto
   
    cd nombre carpeta

4. Instalar las dependencias

    npm install

5. Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto:

 MongoDB
MONGODB_URI_PRODUCTION=tu_uri_de_mongodb atlas

 Configuración del servidor
PORT=3000

 JWT
JWT_SECRET=tu_clave_secreta

Credenciales de correo
1. HOST_MAILTRAP=  smtp.gmail.com
2. PORT_MAILTRAP= 465
3. USER_MAILTRAP= ejemplo@gmail.com
4. PASS_MAILTRAP= tus credenciales

 Url para uso local
URL_BACKEND=http://localhost:3000/api/



## 🏋️‍♀️ Uso
Iniciar el servidor
Modo desarrollo (con nodemon):

npm run dev

Modo producción:

npm start

El servidor estará disponible en http://localhost:3000 o en el puerto especificado en tu archivo .env.
## 📳 Estructura del proyecto
![imagen](https://github.com/user-attachments/assets/c1b13128-1c7e-4ea6-a833-55c9c2e6b084)



## 📜 Autores

- Andrés Tufiño (Andrespipe1)

