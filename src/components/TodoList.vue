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
      <li
        v-for="todo in todos"
        :key="todo.pk">
        <div>
          <button
            @click="onRemoveItem(todo.id)"
          >X</button>
        </div>
        <div>{{ todo.due_date }}</div>
        <div
          class="todo-description"
          >{{ todo.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
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
li {
  display: flex;
  padding: 5px 0;
}
.todo-description {
  margin-left: 15px;
}
</style>
