import express from 'express';
import { registrarComida, obtenerComidasPorPaciente, actualizarComida, eliminarComida } from '../controllers/comida_controller.js';
import { verificarAutenticacion } from '../helpers/crearJWT.js';

const router = express.Router();

// Ruta para obtener las comidas de un paciente
router.get('/:pacienteId', verificarAutenticacion, obtenerComidasPorPaciente);

// Ruta para registrar una nueva comida
router.post('/:pacienteId', verificarAutenticacion, registrarComida);

// Ruta para actualizar una comida específica
router.put('/:comidaId', verificarAutenticacion, actualizarComida);

//Ruta para eliminar una comida
router.delete('/:comidaId', verificarAutenticacion, eliminarComida);

export default router;
