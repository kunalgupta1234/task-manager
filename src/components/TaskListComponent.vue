<template>
   <div class="task-list">
    <div v-for="task in tasks" :key="task.id">
      <TaskComponent :task="task" />
    </div>
  </div>
</template>

<script>
// import { onMounted, onUnmounted, onUpdated } from 'vue'

// component imports
import TaskComponent from './TaskComponent.vue'

export default {
  props: ['tasks'],
  components: { TaskComponent },
  setup() {

  }
}
</script>

<style>

</style>