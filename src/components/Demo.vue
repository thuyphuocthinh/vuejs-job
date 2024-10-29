<script setup>
import { onMounted, ref, useTemplateRef } from "vue";

const tasks = ref([]);
const inputRef = useTemplateRef("inputRef");
let task = ref("");
const addTask = () => {
  if (!task.value.trim()) {
    alert("Please type task");
    inputRef.value.focus();
    return;
  }
  tasks.value.push(task.value);
  task.value = "";
  inputRef.value.focus();
};
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data?.map((item) => item.title);
  } catch (error) {
    console.log(">>> error: ", error);
  }
});
</script>
<template>
  <h1>Vue Jobs</h1>
  <div>
    <input
      ref="inputRef"
      type="text"
      name="task"
      v-model="task"
      placeholder="type task"
    />
    <button @click="addTask">Add</button>
  </div>
  <ul>
    <li v-for="(item, index) in tasks" :key="index">
      <span style="display: inline-block; width: 300px">{{ item }}</span>
      <button style="margin-left: 10px" @click="deleteTask(index)">X</button>
    </li>
  </ul>
</template>

<style scoped></style>
