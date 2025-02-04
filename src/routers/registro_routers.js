import express from 'express';
import { actualizarRegistro, obtenerRegistrosPorPaciente, registrarDatosDiarios, eliminarRegistro} from '../controllers/registro_controller.js';
import { verificarAutenticacion } from '../helpers/crearJWT.js'

const router = express.Router();

// Ruta para obtener registros de un paciente
router.get('/:pacienteId', verificarAutenticacion,obtenerRegistrosPorPaciente);

router.post('/:pacienteId', verificarAutenticacion,registrarDatosDiarios);

router.put('/:registroId', verificarAutenticacion,actualizarRegistro);

router.delete('/:registroId', verificarAutenticacion,eliminarRegistro);
export default router;
