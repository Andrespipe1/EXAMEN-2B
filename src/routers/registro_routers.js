import express from 'express';
import { actualizarRegistro, obtenerRegistrosPorPaciente, registrarDatosDiarios} from '../controllers/registro_controller.js';
import { verificarAutenticacion } from '../helpers/crearJWT.js'

const router = express.Router();

// Ruta para obtener registros de un paciente
router.get('/:pacienteId', verificarAutenticacion,obtenerRegistrosPorPaciente);

router.post('/:pacienteId', verificarAutenticacion,registrarDatosDiarios);

router.put('/:pacienteId', verificarAutenticacion,actualizarRegistro);
export default router;
