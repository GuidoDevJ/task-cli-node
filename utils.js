import fs from 'fs';

const writeTasks = (tasks) => {
  fs.writeFileSync('./tasks.json', JSON.stringify(tasks, null, 2), 'utf8');
};
const readTasks = () => {
  if (!fs.existsSync('./tasks.json')) {
    fs.writeFileSync('./tasks.json', JSON.stringify([], null, 2), 'utf8');
    console.log('Archivo tasks.json creado.');
  }
  return JSON.parse(fs.readFileSync('./tasks.json', 'utf8'));
};
const updateTasks = (tasks, id, type, status, nameTask) => {
  let updated = false;

  // Función para actualizar la tarea según el tipo de operación
  const updateTask = (task) => {
    if (task.id === parseInt(id)) {
      updated = true;
      return {
        ...task,
        ...(type === 'update' && { task: nameTask.trim() }),
        ...(type === 'status' && { status }),
      };
    }
    return task;
  };

  // Actualiza las tareas
  tasks = tasks.map(updateTask);

  if (!updated) {
    console.log(`Task not found (ID: ${id})`);
    return;
  }

  writeTasks(tasks);
};

const listTable = (tasks, todo) => {
  const listTasks = tasks.filter((task) => {
    if (todo === 'pending') {
      return task.status === 'pending';
    } else if (todo === 'in-progress') {
      return task.status === 'in-progress';
    } else if (todo === 'done') {
      return task.status === 'done';
    }
  });
  if (listTasks.length === 0) {
    console.log('No hay tareas con ese estado.');
    return;
  }
  console.table(
    listTasks.map(({ id, task, status }) => ({
      id,
      status: task.trim(),
      status,
    }))
  );
};

export { listTable, readTasks, updateTasks, writeTasks };
