//Requerir los modulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routerPaciente from './routers/paciente_routers.js'
import registroRoutes from './routers/registro_routers.js';
import comidaRouter from './routers/comida_routers.js';

//Inicializaciones
const app = express()
dotenv.config()

//Configuraciones
app.set('port',process.env.PORT || 3000)
app.use(cors())


// Middlewares 
app.use(express.json())


// Variables globales

// Rutas 
app.get('/',(req,res)=>{
    res.send("Server online ❤️‍🩹")})


app.use('/api/',routerPaciente)
app.use('/api/registros',registroRoutes);
app.use('/api/comidas',comidaRouter);

//Rutas no encontradas
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))
// Exportar la instancia de express por medio de app
export default  app