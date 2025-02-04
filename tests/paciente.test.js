import { describe, it, expect } from 'vitest';
import Paciente from '../src/models/Paciente.js'; // Asegúrate de que la ruta sea correcta

describe('Modelo Paciente', () => {
    it('debería cifrar el password correctamente', async () => {
        const paciente = new Paciente({
            nombre: 'Juan',
            apellido: 'Pérez',
            email: 'juan@example.com',
            password: 'password123'
        });

        const passwordEncryp = await paciente.encrypPassword('password123');
        expect(passwordEncryp).toBeDefined();
        expect(passwordEncryp).not.toBe('password123');
    });

    it('debería verificar el password correctamente', async () => {
        const paciente = new Paciente({
            nombre: 'Juan',
            apellido: 'Pérez',
            email: 'juan@example.com',
            password: 'password123'
        });

        paciente.password = await paciente.encrypPassword('password123');
        const match = await paciente.matchPassword('password123');
        expect(match).toBe(true);
    });

    it('debería generar un token', () => {
        const paciente = new Paciente({
            nombre: 'Juan',
            apellido: 'Pérez',
            email: 'juan@example.com',
            password: 'password123'
        });

        const token = paciente.crearToken();
        expect(token).toBeDefined();
        expect(token.length).toBeGreaterThan(0);
    });
});