<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 100px;
}

.register, .login, .add {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
}

.register input, .login input, .add input {
  border-radius: 5px;
  border: 1px solid skyblue;
  height: 30px;
}

.register button, .login button, .add button {
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>
