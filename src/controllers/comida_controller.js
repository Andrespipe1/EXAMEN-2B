import Comida from "../models/Comida.js";

// Obtener comidas por paciente
const obtenerComidasPorPaciente = async (req, res) => {
    try {
        const { pacienteId } = req.params;
        const comidas = await Comida.find({ pacienteId });

        res.status(200).json({ comidas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener las comidas" });
    }
};

// Guardar una nueva comida
const registrarComida = async (req, res) => {
    const { pacienteId } = req.params;
    const { tipoComida, descripcion } = req.body;

    try {
        if (!tipoComida || !descripcion) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios" });
        }

        const nuevaComida = new Comida({
            pacienteId,
            tipoComida,
            descripcion,
        });

        await nuevaComida.save();

        res.status(201).json({ msg: "Comida registrada exitosamente", comida: nuevaComida });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al registrar la comida" });
    }
};

// Actualizar una comida
const actualizarComida = async (req, res) => {
    const { comidaId } = req.params;
    const { tipoComida, descripcion } = req.body;

    try {
        const comidaExistente = await Comida.findById(comidaId);
        if (!comidaExistente) {
            return res.status(404).json({ msg: "Comida no encontrada" });
        }

        comidaExistente.tipoComida = tipoComida || comidaExistente.tipoComida;
        comidaExistente.descripcion = descripcion || comidaExistente.descripcion;

        await comidaExistente.save();

        res.status(200).json({ msg: "Comida actualizada correctamente", comida: comidaExistente });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la comida" });
    }
};

// Eliminar una comida
const eliminarComida = async (req, res) => {
    const { comidaId } = req.params;

    try {
        const comidaExistente = await Comida.findById(comidaId);
        if (!comidaExistente) {
            return res.status(404).json({ msg: "Comida no encontrada" });
        }

        await Comida.findByIdAndDelete(comidaId);

        res.status(200).json({ msg: "Comida eliminada correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar la comida" });
    }
};

export {
    obtenerComidasPorPaciente,
    registrarComida,
    actualizarComida,
    eliminarComida,
};
