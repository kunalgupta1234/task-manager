<template>
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <SingleTaskComponent :task="task" @delete="handleDelete" @complete="handleCompllete"/>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTaskComponent from "../components/SingleTaskComponent.vue";
export default {
  name: "HomeView",
  components: { SingleTaskComponent },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/tasks/")
      .then((res) => res.json())
      .then((data) => (this.tasks = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.tasks = this.tasks.filter((tasks) => {
        return tasks.id != id;
      });
    },
    handleCompllete(id){
      let p = this.tasks.find(task=>{
        return task.id === id
      })
      p.complete = !p.complete
    }
  },
};
</script>
