<template>
  <img src="../assets/rest-logo.svg" alt="rest-logo" class="logo">
  <h1>Start!!!!</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name" v-model="name">
    <input type="text" placeholder="Enter Email" v-model="email">
    <input type="text" placeholder="Enter Password" v-model="password">
    <button v-on:click="signUp">SignUp</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
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
      let result = await axios.post('http://localhost:3000/users', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
      console.log(result)
      if (result.status === 201) {
        localStorage.setItem('user-info', JSON.stringify(result.data))
        this.$router.push({name: 'HomePage'})
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')

    if (user) {
      this.$router.push({name: 'HomePage'})
    }
  }
}
</script>

<style>

</style>