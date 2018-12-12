<template>
  <div class="edit-todo">
    <h1>Edit TODO</h1>
    <todo-form
      v-if="todo"
      :todo="todo"
      @input='onChanged'
      ></todo-form>
  </div>
</template>

<script>
import apiclient from '../lib/apiclient.js'
import TodoForm from '@/components/TodoForm.vue'

export default {
  name: 'home',
  components: {
    TodoForm
  },
  data: function () {
    return {
      todo: null
    }
  },
  created () {
    apiclient.getTodo(this.$route.params.pk)
      .then(data => {
        this.todo = data
      })
  },
  methods: {
    onChanged (todo) {
      apiclient.updateTodo(this.todo.pk, {
        description: todo.description,
        dueDate: todo.dueDate,
      })
        .then(() => {
          this.$router.push({name: 'home'})
        })
    }
  }
}
</script>
