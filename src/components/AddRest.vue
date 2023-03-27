Home.vue<template>
  <Header/>
  <h1>
    Hello username, welcome and Add Restaurant Page
  </h1>

  <form action="" class="add">
    <input type="text" name="name" placeholder="enter name">
    <input type="text" name="address" placeholder="enter address">
    <input type="text" name="contact" placeholder="enter contact">
    <button type="button">Add new Restaurant</button>
  </form>
</template>

<script>
import Header from "@/components/Header.vue";

export default {

  name: 'AddRest',
  components: {
    Header
  },
  mounted() {
    let user = localStorage.getItem('user-info')

    if (!user) {
      this.$router.push({name: 'SignUp'})
    }
  }
}
</script>