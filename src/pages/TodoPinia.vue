<template>
  <q-page>
    <section class="bg-primary">
      <div class="q-pa-md">
        <q-input dense filled v-model="newTask" placeholder="Add Task using Pinia " class="bg-white" @keyup.enter="addTask">
          <template v-slot:append>
            <q-btn round dense flat icon="add" @click="addTask" />
          </template>
        </q-input>
      </div>
    </section>
    <section>
      <div class="container">
        <div>
          <q-list class="full-width">
            <q-item tag="label" v-ripple v-for="task, index in tasks" :key="index"
              style="border-bottom: 1px solid rgb(215, 215, 215);">
              <q-item-section :class="{ 'change-color': taskSelected.includes(task.id) }">
                <q-checkbox v-model="taskSelected" :label="task.value" :val="task.id"></q-checkbox>
              </q-item-section>
              <q-item-section side v-if="taskSelected.includes(task.id)">
                <q-btn flat icon="delete" size="md" color="primary" @click="deleteTask(index)"></q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useTaskStore } from 'src/stores/task';

const $q = useQuasar();
const taskStore = useTaskStore();
const taskSelected = ref([]);
const newTask = ref("");
const uid = ref(taskStore.taskId);

const tasks = ref(taskStore.tasks);

function deleteTask(index) {
  $q.dialog({
    title: 'Confirmation',
    message: 'Are you sure you want to delete the task?'
  }).onOk(() => {
    taskStore.deleteTask(index);
    $q.notify({
      message: "Successfully Deleted!",
      type: "positive",
      timeout: 2000
    });
  });
}

function addTask() {
  if (newTask.value != "") {
    taskStore.addTask({value: newTask.value,
      id: uid.value++});
    newTask.value = "";
  }
  else {
    $q.notify({
      message: "Task cannot be empty!",
      type: "negative",
      timeout: 2000
    });
  }
}
</script>

<style>
.change-color {
  text-decoration: line-through;
}
</style>
