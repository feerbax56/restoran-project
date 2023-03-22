<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/AddRest">Add Restaurant</router-link>
    <router-link to="/UpdateRest">Update Restaurant</router-link>
    <a href="#" v-on:click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({name: 'LogIn'})
    }
  }
}
</script>
<style>
.nav {
  background-color: #2c3e50;
  overflow: hidden;
}

.nav a {
  float: left;
  color: skyblue;
  padding: 18px 14px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 10px;
}

.nav a:hover {
  background-color: blue;
  color: white;
}
</style>