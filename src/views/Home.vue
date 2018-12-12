<template>
  <div class="home">
    <todo-list title="Python Girona TODO list"></todo-list>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'home',
  components: {
    TodoList
  }
}
</script>
