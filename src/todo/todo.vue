<template>
  <div class="todo">
    <section>
      <input type="text" class="todoList" placeholder="接下去要做什么" autofocus="autofocus" @keyup.enter="addList">
      <item :todo="todo" v-for="todo in filterTodo" :key="todo.id" @del="delItem" />
      <Itabs :filter="filter" :todos="todos" @tagger="changeState"></Itabs>
    </section>

  </div>
</template>
<script>
import item from "./item.vue";
import Itabs from "./tabs.vue";
let id = 0;
export default {
  components: {
    item,
    Itabs
  },
  data() {
    return {
      filter: "active",
      todos: []
    };
  },
  computed: {
    filterTodo() {
      if (this.filter == "all") {
        return this.todos;
      }
      {
        const completed = this.filter === "completed";
        let newArray = this.todos.filter((todo) => {
          if (todo.completed == completed) {
            return true;
          };
        });
        return newArray;
      } {
        const active = this.filter === "active";
        let newArray = this.todos.filter((todo) => {
          if (todo.completed == active) {
            return true;
          };
        });
        return newArray;
      }
    }
  },
  methods: {
    addList(e) {
      this.todos.unshift({
        id: id++,
        completed: false,
        content: e.target.value.trim()
      });
      e.target.value = "";
    },
    delItem(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1);
    },
    changeState(state) {
      this.filter = state;
    }
  }
};
</script>

<style scoped>
.todo section{
  min-height: 100px;
  margin-bottom: 70px;
}
.todoList {
  padding: 8px;
  border-radius: 8px;
  width: 300px;
  display: inline-block;
  height: 20px;
  border:1px solid #ddd;
}

</style>
