import { Schema, model } from 'mongoose';

const comidaSchema = new Schema({
    pacienteId: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    tipoComida: {
        type: String,
        enum: ['Desayuno', 'Almuerzo', 'Cena'],
        required: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

export default model('Comida', comidaSchema);
