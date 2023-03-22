<template>
  <div class="nav">
    <a href="#">Home</a>
    <a href="#">Add Restaurant</a>
    <a href="#">Update Restaurant</a>
    <a href="#">Logout</a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header'
}
</script>
<style>
.nav{
  background-color: #2c3e50;
  overflow: hidden;
}
.nav a{
  float: left;
  color: skyblue;
  padding: 18px 14px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 10px;
}
.nav a:hover{
  background-color: blue;
  color: white;
}
</style>