import { Schema, model } from 'mongoose';

const registroSchema = new Schema({
  pacienteId: {
    type: Schema.Types.ObjectId, // Relación con el modelo Paciente
    ref: 'Paciente',
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
    required:true, // Fecha de registro automática
  },
  peso: {
    type: Number, // Peso en kilogramos
    required: true,
  },
  estatura: {
    type: Number, // Estatura en centímetros
    required: true,
  },
  nivelActividadFisica: {
    type: String, // Escala 1-10
    default: null,
  },
  horasDeSueño: {
    type: Number, // Cantidad de horas dormidas
    default: null,
  },
  nivelEstres: {
    type: String,
    default: null,
  },
});

// Exportar el modelo
export const Registro = model('Registro', registroSchema);
