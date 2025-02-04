import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { connect, disconnect, Schema, model } from 'mongoose';
import  {Registro}  from '../src/models/Registro.js'; // Importa el modelo 'Registro'
import Paciente from '../src/models/Paciente.js';
import { MongoMemoryServer } from 'mongodb-memory-server'; // Utilizamos un servidor en memoria para simular la DB

let mongoServer;

beforeAll(async () => {
  // Configuración de MongoMemoryServer
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await connect(mongoUri);
});

afterAll(async () => {
  await disconnect();
  await mongoServer.stop();
});

describe('Modelo Registro', () => {
  it('debe crear un nuevo registro correctamente', async () => {
    // Crear un paciente para asociar al registro
    const paciente = new Paciente({
      nombre: 'Andrés',
      apellido: 'Tufiño',
      email: 'andres2@ejemplo.com',
      password: '123456',
    });

    await paciente.save(); // Guardar el paciente en la DB

    // Crear un registro para ese paciente
    const registro = new Registro({
      pacienteId: paciente._id,
      peso: 70,
      estatura: 175,
      nivelActividadFisica: '5',
      horasDeSueño: 8,
      nivelEstres: '3',
    });

    await registro.save(); // Guardar el registro en la DB

    // Comprobar que se guardó correctamente
    const savedRegistro = await Registro.findById(registro._id).populate('pacienteId');
    
    expect(savedRegistro).toBeTruthy(); // El registro debe existir
    expect(savedRegistro.pacienteId._id.toString()).toBe(paciente._id.toString()); // El paciente debe estar relacionado
    expect(savedRegistro.peso).toBe(70);
    expect(savedRegistro.estatura).toBe(175);
    expect(savedRegistro.nivelActividadFisica).toBe('5');
    expect(savedRegistro.horasDeSueño).toBe(8);
    expect(savedRegistro.nivelEstres).toBe('3');
  });

  it('debe fallar si el campo pacienteId está vacío', async () => {
    const registro = new Registro({
      peso: 70,
      estatura: 175,
      nivelActividadFisica: '5',
      horasDeSueño: 8,
    });

    try {
      await registro.save();
    } catch (error) {
      expect(error).toBeTruthy(); // Debe haber un error porque pacienteId es requerido
    }
  });

  it('debe establecer una fecha por defecto si no se proporciona', async () => {
    const paciente = new Paciente({
      nombre: 'Andrés',
      apellido: 'Tufiño',
      email: 'andres@ejemplo.com',
      password: '123456',
    });

    await paciente.save();

    const registro = new Registro({
      pacienteId: paciente._id,
      peso: 70,
      estatura: 175,
    });

    await registro.save();

    const savedRegistro = await Registro.findById(registro._id);
    expect(savedRegistro.fecha).toBeTruthy(); // La fecha debe ser establecida automáticamente
  });
});
