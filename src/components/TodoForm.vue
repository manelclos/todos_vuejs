<template>
  <div class="todo-list">
    <form>
      Due date: <input v-model="dueDate" />
      Description: <input v-model="description" size="50" />
      <button
        @click.prevent="onSave"
        >Save</button>
    </form>
  </div>
</template>

<script>
import apiclient from '../lib/apiclient.js'

export default {
  name: 'TodoForm',
  props: ['todo'],
  data: function () {
    return {
      dueDate: this.todo.due_date,
      description: this.todo.description
    }
  },
  methods: {
    onSave () {
      this.$emit('input', {
        description: this.description,
        dueDate: this.dueDate
      })
    }
  }
}
</script>
