<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="col-md-6 offset-md-3">
      <h1 class="text-center mb-4">Todo application</h1>
      <input type="text" class="form-control mb-4" v-model="userInput" @keyup.enter="addNewTodo">

      <div class="list-group mb-4">
        <!--반복할 데이터 목록: todo = todoList가 반복되면서 불러올 요소 하나하나-->
        <template v-for="todo in activeTodoList">
          <button v-bind:key="todo">
          <todo
            :label="todo.label"
            @componentClick="toggleTodoState(todo)"
          />
          </button>
        </template>
      </div>
      <div class="text-right">
        <button type="button" class="btn-btn-sm" @click="changeCurrentState('active')">Todo</button>
        <button type="button" class="btn-btn-sm" @click="changeCurrentState('done')">Done</button>
        <button type="button" class="btn-btn-sm" @click="changeCurrentState('all')">All</button>
      </div>
    </div>  
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/Todo';

export default {
  name: 'App',
  data() {
    return {
      userInput: '',
      todoList: [],
      currentState: 'active'
    };
  },
  // JSON 객체 - HTML 코드에서 외부 변수처럼 사용 가능
  computed: {
    activeTodoList() {
      return this.todoList.filter(todo => this.currentState === 'all' || todo.state === this.currentState);
    }
  },
  methods: {
    changeCurrentState(state) {
      this.currentState = state;
    },
    addNewTodo() {
      this.todoList.push({
        // String -> JSON 형식으로 변환
        label: this.userInput,
        state: 'active'
      });
      this.userInput = '';
    },
    // todo parameter: 클릭한 항목을 받을 변수
    toggleTodoState(todo) {
      todo.state = todo.state === 'active' ? 'done' : 'active';
    }
  },
  components: {
    // HelloWorld
    Todo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
