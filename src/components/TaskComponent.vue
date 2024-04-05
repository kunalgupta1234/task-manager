<template>
  <div class="task" :class="{ complete: task.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ task.title }}</h3>
      <div>
        <!-- <span class="material-icons"> edit </span> -->
        <button @click="handleDelete" class="delete-button">delete</button>
        <button @click="handleComplete" class="complete-button">
          Complete
        </button>
        <!-- <span @click="deleteTask" class="material-icons"> delete </span>
        <span @click="toggleComplete" class="material-icons"> done </span> -->
      </div>
    </div>
    <!-- <div class="details">{{ task.details }}</div> -->
  </div>
</template>


<script>
// import getTask from "../composables/getTask";
// import { useRoute, useRouter } from "vue-router";
// import { computed } from "vue";
import { projectFirestore } from "../firebase/config";

export default {
  props: ["task"],
  setup(props) {
    // const router = useRouter();
    // const route = useRoute();
    // console.log("delete1");
    // const snippet = computed(() => {
    //   return props.task.details.substring(0, 100) + "...";
    // });
    // console.log(snippet.value);

    // return { snippet };
    // const { task, error, load } = getTask(props.task.id);
    // load();
    const handleDelete = async () => {
      console.log(props.task.id, props.task.title);
      await projectFirestore.collection("tasks").doc(props.task.id).delete();

      // router.push({ name: "home" });
      // window.location.reload();
    };

    const handleComplete = async () => {
      let docRef = await projectFirestore
        .collection("tasks")
        .doc(props.task.id);
      console.log(docRef, props.task.complete);
      const res = await docRef.update({ complete: !props.task.complete });
      // await projectFirestore.collection("tasks").doc(props.task.id).delete();
      // router.push({ name: "home" });
      // window.location.reload();
    };

    // const deleteTask = async () => {
    //   console.log("delete");
    //   await projectFirestore.collection("tasks").doc(props.task.id).delete();
    // };

    return { handleDelete, handleComplete };
  },
};
</script>


<style>
.task {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
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
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
/* completed projects */
.task.complete {
  border-left: 4px solid #00ce89;
}
.task.complete .tick {
  color: #00ce89;
}
.delete-button {
  display: block;
  margin: 20px auto 0;
  background: red;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
.complete-button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>