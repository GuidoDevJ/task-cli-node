import { strict as assert } from 'assert';
import { readTasks, writeTasks } from './utils.js';

// Simula datos iniciales
const initialTasks = [
  { id: 1, task: 'Test task', status: 'pending' },
];
writeTasks(initialTasks);

// Test: leer tareas
const tasks = readTasks();
assert.deepEqual(tasks, initialTasks, 'El contenido de tasks no coincide');

// Test: agregar una tarea
tasks.push({ id: 2, task: 'New task', status: 'pending' });
writeTasks(tasks);
assert.equal(readTasks().length, 2, 'La tarea no se agregó correctamente');

console.log('Todos los tests pasaron correctamente.');
