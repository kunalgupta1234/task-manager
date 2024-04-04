<template>
  <div class="task" :class="{ complete: task.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ task.title }}</h3>
      <div>
        <!-- <span class="material-icons"> edit </span> -->
        <span @click="deleteTask" class="material-icons"> delete </span>
        <span @click="toggleComplete" class="material-icons"> done </span>
      </div>
    </div>
    <div class="details" v-if="showDetails">{{ snippet }}</div>
  </div>
</template>


<script>
import { computed } from "vue";

export default {
  props: ["task"],
  setup(props) {
    const snippet = computed(() => {
      return props.task.details.substring(0, 100) + "...";
    });
    console.log(snippet.value);

    return { snippet };
  },
};
</script>


<style>
.task {
  margin: 20px auto;
  /* background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05); */
  border: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  /* font-size: 24px;
    margin-left: 10px;
    color: #bbb; */
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
/* completed projects */
.task.complete {
  border: 4px solid #00ce89;
}
/* .task.complete .tick {
    color: #00ce89;
  } */
</style>