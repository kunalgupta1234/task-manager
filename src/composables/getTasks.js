import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getTasks = () => {

  const tasks = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('tasks').get()
      //console.log(res.docs)

      tasks.value = res.docs.map(doc => {
         //console.log(doc.data())
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { tasks, error, load }
}

export default getTasks