import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getTasks = () => {

  const tasks = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      // const res = await projectFirestore.collection('tasks').get()

      // tasks.value = res.docs.map(doc => {
      //   return { ...doc.data(), id: doc.id }
      // })

      projectFirestore.collection('tasks').orderBy('daysRemaining').onSnapshot((snap) => {
        let docs = snap.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        tasks.value = docs
      })
    }
    catch (err) {
      error.value = err.message
    }
  }

  return { tasks, error, load }
}

export default getTasks