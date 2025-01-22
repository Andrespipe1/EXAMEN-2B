import { Registro } from '../models/Registro.js';

export const obtenerRegistrosPorPaciente = async (req, res) => {
  try {
    const { pacienteId } = req.params;

    const registros = await Registro.find({ pacienteId });

    res.status(200).json({
      registros,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al obtener registros',
    });
  }
};

export const registrarDatosDiarios = async (req, res) => {
  const { pacienteId } = req.params;
  const { peso, estatura, nivelActividadFisica, horasDeSueño, nivelEstres } = req.body;

  try {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Eliminar la hora para comparar solo la fecha

    // Buscar si ya existe un registro para este paciente en la fecha actual
    const registroExistente = await Registro.findOne({
      pacienteId,
      fecha: hoy,
    });

    if (registroExistente) {
      return res.status(400).json({
        msg: 'Ya existe un registro para hoy',
      });
    }

    const nuevoRegistro = new Registro({
      pacienteId,
      peso,
      estatura,
      nivelActividadFisica,
      horasDeSueño,
      nivelEstres,
      fecha: hoy,
    });

    await nuevoRegistro.save();

    return res.status(201).json({
      msg: 'Registro diario creado exitosamente',
      registro: nuevoRegistro,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al registrar los datos',
    });
  }
};
