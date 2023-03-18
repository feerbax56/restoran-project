<template>
  <img src="../assets/rest-logo.svg" alt="rest-logo" class="logo">
  <h1>Start!!!!</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name" v-model="name">
    <input type="text" placeholder="Enter Email" v-model="email">
    <input type="text" placeholder="Enter Password" v-model="password">
    <button v-on:click="signUp">SignUp</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async signUp() {
      let result = await axios.post('http://localhost:3000/user', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
      console.log(result)
      if(result.status == 201){
        alert("OK !!!!")
        localStorage.setItem('user-info', JSON.stringify(result.data))
      }
    }
  }
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

.register button {
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>