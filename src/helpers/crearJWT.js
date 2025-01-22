import jwt from 'jsonwebtoken';  
import Paciente from '../models/Paciente.js'

const generarJWT = (id, rol) => {
    return jwt.sign({ id, rol }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

// Método para verificar el token
const verificarAutenticacion = async (req, res, next) => {
    // Verifica si el token existe
    // Bearer
    if (!req.headers.authorization) return res.status(404).json({ msg: "Lo sentimos, debes proporcionar un token" });

    const { authorization } = req.headers;
    try {
        const { id, rol } = jwt.verify(authorization.split(' ')[1], process.env.JWT_SECRET);
        if (rol === "paciente") {
            req.pacienteBDD = await Paciente.findById(id).lean().select("-password");
            next();
        }
    } catch (error) {
        const e = new Error("Formato del token no válido");
        return res.status(404).json({ msg: e.message });
    }
}

export {
    generarJWT,
    verificarAutenticacion
}
