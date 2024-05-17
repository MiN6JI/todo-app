import { defineStore } from 'pinia';
import { watch } from 'vue';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    taskId: JSON.parse(localStorage.getItem('taskId')) || 1,
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
      this.persistToLocalStorage();
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.persistToLocalStorage();
    },
    persistToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      localStorage.setItem('taskId', JSON.stringify(this.taskId));
    },
  },
  persist: true,
});
