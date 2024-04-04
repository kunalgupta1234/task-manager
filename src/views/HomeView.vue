<template>
  <div class="home">
    <div v-if="tasks.length">
      <TaskListComponent :tasks="tasks" />

      <!-- <p>partition</p> -->

      <!-- <div v-for="task in tasks" :key="task.id">
        <SingleTaskComponent
          :task="task"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import getTasks from "../composables/getTasks";
// component imports
import TaskListComponent from "../components/TaskListComponent.vue";

// import SingleTaskComponent from "../components/SingleTaskComponent.vue";

export default {
  name: "HomeView",
  components: { TaskListComponent },
  setup() {
    const { tasks, error, load } = getTasks();

    load();

    return { tasks, error };
  },
  // data() {
  //   return {
  //     tasks: [],
  //   };
  // },
  // mounted() {
  //   fetch("http://localhost:3000/tasks/")
  //     .then((res) => res.json())
  //     .then((data) => (this.tasks = data))
  //     .catch((err) => console.log(err.message));
  // },
  // methods: {
  //   handleDelete(id) {
  //     this.tasks = this.tasks.filter((tasks) => {
  //       return tasks.id != id;
  //     });
  //   },
  //   handleComplete(id) {
  //     let p = this.tasks.find((task) => {
  //       return task.id === id;
  //     });
  //     p.complete = !p.complete;
  //   },
  // },
};
</script>
