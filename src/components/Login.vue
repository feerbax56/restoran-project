<template>
  <img src="../assets/rest-logo.svg" alt="rest-logo" class="logo">
  <h1>Login</h1>
  <div class="login">
    <input type="text" placeholder="Enter Email" v-model="email">
    <input type="text" placeholder="Enter Password" v-model="password">
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/SignUp">SignUp</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LogIn',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      )
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem('user-info', JSON.stringify(result.data[0]))
        this.$router.push({name: 'HomePage'})
      }
      console.log(result)
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')

    if (user) {
      this.$router.push({name: 'HomePage'})
    }
  },
}

</script>