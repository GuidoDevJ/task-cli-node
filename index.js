#!/usr/bin/env node
import { listTable, readTasks, updateTasks, writeTasks } from './utils.js';

const args = process.argv.slice(2); // Ignora 'node' y el nombre del script
const command = args[0];
const todo = args.slice(1).join(' ');
let tasks = readTasks();
const idTodo = todo.slice(0, 1);
const newTasks = todo.slice(1); 

switch (command) {
  case 'add':
    const id = tasks.length > 0 ? tasks[tasks.length - 1]?.id + 1 : 1;
    const newTask = {
      id: id,
      task: todo.trim(),
      status: 'pending',
    };
    tasks.push(newTask);
    writeTasks(tasks);
    console.log(`Task added successfully (ID: ${id})`);
    break;
  case 'update':
    updateTasks(tasks, idTodo, 'update', null, newTasks);
    break;
  case 'delete':
    tasks = tasks.filter((task) => task.id !== parseInt(todo));
    writeTasks(tasks);
    console.log(`Deleta task ${todo}`);
    break;
  case 'mark-in-progress':
    updateTasks(tasks, idTodo, 'status', 'in-progress', null);
    console.log('Marcando tarea como en progreso...');
    break;
  case 'mark-done':
    updateTasks(tasks, idTodo, 'status', 'done', null);
    console.log('Marcando tarea como completada...');
    break;
  case 'list':
    if (!todo) {
      console.table(
        tasks.map(({ id, task, status }) => ({
          id,
          task: task.trim(),
          status,
        }))
      );
      break;
    }
    listTable(tasks, todo);
    break;
  default:
    console.log('Comando no reconocido.');
}
