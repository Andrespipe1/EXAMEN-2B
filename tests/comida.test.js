import { describe, it, expect, vi,beforeAll,afterAll } from 'vitest';
import mongoose from 'mongoose';
import  Comida  from '../src/models/Comida.js';  // Ajusta la importación si es necesario
import  Paciente  from '../src/models/Paciente.js';  // Necesario para el campo pacienteId
import { MongoMemoryServer } from 'mongodb-memory-server'; // Importa MongoMemoryServer

let mongoServer;

describe('Modelo Comida', () => {
  beforeAll(async () => {
    // Inicia el servidor MongoDB en memoria
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    // Conecta a la base de datos en memoria
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Detiene el servidor de MongoDB en memoria y desconecta
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('debe crear un nuevo registro de comida correctamente', async () => {
    const paciente = new Paciente({
      nombre: 'Andrés',
      apellido: 'Tufiño',
      email: 'andres7@example.com',
      password: 'password123'
    });

    await paciente.save();

    const comida = new Comida({
      pacienteId: paciente._id,
      tipoComida: 'Desayuno',
      descripcion: 'Huevos con pan',
    });

    const comidaGuardada = await comida.save();
    expect(comidaGuardada).toHaveProperty('_id');
    expect(comidaGuardada.pacienteId).toEqual(paciente._id);
    expect(comidaGuardada.tipoComida).toBe('Desayuno');
    expect(comidaGuardada.descripcion).toBe('Huevos con pan');
    expect(comidaGuardada.fecha).toBeInstanceOf(Date);
  });

  it('debe fallar si el campo pacienteId está vacío', async () => {
    const comida = new Comida({
      tipoComida: 'Almuerzo',
      descripcion: 'Arroz con pollo'
    });

    try {
      await comida.save();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.errors.pacienteId).toBeDefined();
    }
  });

  it('debe fallar si el campo tipoComida tiene un valor no permitido', async () => {
    const paciente = new Paciente({
      nombre: 'Andrés',
      apellido: 'Tufiño',
      email: 'andres8@example.com',
      password: 'password123'
    });

    await paciente.save();

    const comida = new Comida({
      pacienteId: paciente._id,
      tipoComida: 'Merienda', // No permitido
      descripcion: 'Galletas con té',
    });

    try {
      await comida.save();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.errors.tipoComida).toBeDefined();
    }
  });

  it('debe establecer la fecha por defecto si no se proporciona', async () => {
    const paciente = new Paciente({
      nombre: 'Andrés',
      apellido: 'Tufiño',
      email: 'andres9@example.com',
      password: 'password123'
    });

    await paciente.save();

    const comida = new Comida({
      pacienteId: paciente._id,
      tipoComida: 'Cena',
      descripcion: 'Ensalada',
    });

    const comidaGuardada = await comida.save();
    expect(comidaGuardada.fecha).toBeInstanceOf(Date); // Verifica que la fecha sea un objeto Date
  });
});