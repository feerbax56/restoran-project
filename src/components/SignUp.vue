<template>
  <img src="../assets/rest-logo.svg" alt="rest-logo" class="logo">
  <h1>Start!!!!</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name">
    <input type="text" placeholder="Enter Email">
    <input type="text" placeholder="Enter Password">
    <button>SignUp</button>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style>
.logo {
  width: 100px;
}

.register {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
}
.register input {
  border-radius: 5px;
  border: 1px solid skyblue;
}

.register button{
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>