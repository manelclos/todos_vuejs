<template>
  <div class="todo-list">
    <h1>{{ title }}</h1>
    <form>
      Due date: <input v-model="dueDate" type="date" />
      Description: <input v-model="description" size="50" />
      <button
        @click.prevent="onAdd"
        >Afegir</button>
    </form>
    <ul>
      <todo-item
        v-for="todo in todosSorted"
        :key="todo.pk"
        :todo="todo"
        @remove="onRemoveItem"
      >
      </todo-item>

    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    title: String
  },
  data: function () {
    return {
      dueDate: '',
      description: '',
      todos: [
        {
          pk: 1,
          description: 'Preparar taller VueJS',
          due_date: '2018-12-10',
        },
        {
          pk: 2,
          description: 'Enviar correu recordatori sobre portàtils, etc.',
          due_date: '2018-12-12',
        },
        {
          pk: 3,
          description: 'Taller VueJS - UdG',
          due_date: '2018-12-13',
        },
      ]
    }
  },
  computed: {
    todosSorted () {
      return this.todos.concat().sort((a, b) => {
        if (a.due_date < b.due_date) {
          return -1
        }
        if (a.due_date > b.due_date) {
          return 1
        }
        return 0
      })
    }
  },
  methods: {
    onAdd () {
      this.todos.push({
        id: Date.now(),
        description: this.description,
        due_date: this.dueDate
      })
    },
    onRemoveItem (pk) {
      this.todos = this.todos.filter(item => {
        return item.pk !== pk
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
