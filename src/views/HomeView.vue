<template>
  <div class="home">
    <div v-if="tasks.length">
      <TaskListComponent :tasks="tasks" />
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import getTasks from "../composables/getTasks";
// component imports
import TaskListComponent from "../components/TaskListComponent.vue";

export default {
  name: "HomeView",
  components: { TaskListComponent },
  setup() {
    const { tasks, error, load } = getTasks();
    load();
    return { tasks, error };
  },
};
</script>
