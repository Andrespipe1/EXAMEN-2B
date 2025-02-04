## BACKEND SALUDIFY

SALUDIFY es un proyecto de backend construido con Node.js y Express, que proporciona una API RESTful para integrarse fácilmente con aplicaciones frontend. Utiliza MongoDB como sistema de gestión de bases de datos y está optimizado para entornos tanto de desarrollo como de producción.

📌 Características

    Conexión con la base de datos MongoDB Atlas.
    Gestión de rutas y middleware usando Express.
    Soporte para integraciones seguras a través de diferentes orígenes.
    Validación de datos utilizando express-validator.
    Autenticación y autorización con JSON Web Tokens (JWT).
    Cifrado de contraseñas mediante bcryptjs.




🛡️ Seguridad

Este proyecto utiliza las siguientes medidas de seguridad:

    Cifrado de contraseñas con bcryptjs.
    Generación y validación de tokens JWT para autenticar usuarios.
    Validación de entradas con express-validator para prevenir ataques de inyección.



## 🚀 Instalación
1. Clonar el repositorio

2. Navegar al directorio del proyecto

cd saludify-backend

3. Instalar las dependencias

npm install

4. Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto y añade las siguientes configuraciones:

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
## Estructura del proyecto

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## 📜 Autores

- Andrés Tufiño (Andrespipe1)
- Wilmer Vargas (Wilmer-Vnr)

