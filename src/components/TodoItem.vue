<template>
  <li
    :key="todo.pk">
    <div>
      <button
        @click="$emit('remove', todo.pk)"
      >X</button>
    </div>
    <div>{{ todo.due_date }}</div>
    <div
      class="todo-description"
      >{{ todo.description }}</div>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo']
}
</script>

<style scoped>
li {
  display: flex;
  padding: 5px 0;
}
.todo-description {
  margin-left: 15px;
}
</style>
