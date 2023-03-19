<template>
  <img src="../assets/rest-logo.svg" alt="rest-logo" class="logo">
  <h1>Login</h1>
  <div class="login">
    <input type="text" placeholder="Enter Email" v-model="email">
    <input type="text" placeholder="Enter Password" v-model="password">
    <button>Login</button>
    <p>
      <router-link to="/SignUp">SignUp</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'LogIn'
}

</script>