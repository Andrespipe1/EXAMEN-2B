import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    testTimeout: 30000, // Establece el tiempo de espera a 10 segundos (20000ms)
  },
});
