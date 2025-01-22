import {Router} from 'express'
import { actualizarPassword, actualizarPerfil, comprobarTokenPassword, confirmEmail, login, nuevoPassword, perfilUsuario, recuperarPassword, registro} from '../controllers/paciente_controller.js'
import { verificarAutenticacion } from '../helpers/crearJWT.js'


const router = Router()

//Rutas Públicas
router.post('/registro',registro)

router.get('/confirmar/:token',confirmEmail)

router.post('/login',login)

router.post('/recuperar-password',recuperarPassword)

router.get('/recuperar-password/:token',comprobarTokenPassword)

router.post('/nuevo-password/:token',nuevoPassword)

//Rutas Privadas
router.get('/perfilpaciente',verificarAutenticacion,perfilUsuario)
router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)
router.put('/veterinario/:id',verificarAutenticacion,actualizarPerfil)

export default router