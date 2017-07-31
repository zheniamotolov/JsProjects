import React from 'react';

export class Todo extends React.Component {
  isStorageAvailable = false;
  tasksArray = [];

  getTasksFromStorage() {
    if (typeof localStorage !== 'undefined') {
      this.tasksArray = localStorage.getItem('TasksArray' + this.props.id) || [];
      this.isStorageAvailable = true;
    } else {
      this.tasksArray = [];
      this.isStorageAvailable = false;
    }
  }

  saveListToStorage() {
    localStorage.setItem('tasksArray' + this.props.id, JSON.stringify(this.tasksArray));
  }

  // addNewTask(form) {
  //   this.tasksArray.unshift({
  //     name: form.taskName,
  //     done: false
  //   });
  //
  //   if (this.isStorageAvailable) {
  //     this.saveListToStorage();
  //   }
  //
  //   this.todoForm.reset();
  // }
  //
  // onDoneClick(index: number) {
  //   this.tasksArray[index].done = !this.tasksArray[index].done;
  //
  //   if (this.isStorageAvailable) {
  //     this.saveListToStorage();
  //   }
  // }
  //
  // onRemoveTask(index: number) {
  //   this.tasksArray.splice(index, 1);
  //
  //   if (this.isStorageAvailable) {
  //     this.saveListToStorage();
  //   }
  // }
  //
  // onSaveClick(event) {
  //   event.preventDefault();
  //
  //   this.tasksArray[this.currentTask].name = this.editForm.controls['newTaskName'].value;
  //   this.openEditBlock = false;
  //
  //   if (this.isStorageAvailable) {
  //     this.saveListToStorage();
  //   }
  // }
  //
  // checkFilter(task) {
  //   if (task.done) {
  //     if (this.currentFilter === 'all' || this.currentFilter === 'done') {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     if (this.currentFilter === 'all' || this.currentFilter === 'progress') {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  //
  // checkTaskForDone(task) {
  //   return !!task.done;
  // }

  render() {
    this.getTasksFromStorage();

    return (
        <div className="todo">
          <form>
            <input type="text"
                   className="task-input"
                   placeholder="Enter task name..." />
            <button type="submit" className="add-task-btn">
              Adds
            </button>
          </form>

          <div className="todo-list">
            <div className="overlay"></div>

            <div className="filter-btns">
              <button className="all-filter">All</button>
              <button className="progress-filter">Progress</button>
              <button className="done-filter">Done</button>
            </div>
          </div>
        </div>
    );
  }
}

Todo.propTypes = {
  id: React.PropTypes.number
};
