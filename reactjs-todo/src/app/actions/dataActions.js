export function setTasksArray(newTasksArray) {
  return {
    type: 'SET_TASKS_ARRAY',
    payload: newTasksArray
  };
}

export function setCurrentTask(newCurrentTask) {
  return {
    type: 'SET_CURRENT_TASK',
    payload: newCurrentTask
  };
}

export function setCurrentFilter(newCurrentFilter) {
  return {
    type: 'SET_CURRENT_FILTER',
    payload: newCurrentFilter
  };
}

export function setOpenEditBlock(openEditBlock) {
  return {
    type: 'SET_OPEN_EDIT_BLOCK',
    payload: openEditBlock
  };
}

export function setStorageName(newStorageName) {
  return {
    type: 'SET_STORAGE_NAME',
    payload: newStorageName
  };
}
