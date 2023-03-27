Home.vue
<template>
  <Header/>
  <h1>
    Hello username, welcome and Update Restaurant Page
  </h1>

  <form action="" class="add">
    <input type="text" name="name" placeholder="enter name" v-model="restaurant.name">
    <input type="text" name="address" placeholder="enter address" v-model="restaurant.address">
    <input type="text" name="contact" placeholder="enter contact" v-model="restaurant.contact">
    <button type="button">Update Restaurant</button>
  </form>
</template>

<script>
import Header from "@/components/Header.vue";

export default {

  name: 'UpdateRest',
  components: {
    Header
  },
  data() {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: '',
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')

    if (!user) {
      this.$router.push({name: 'SignUp'})
    }
  }
}
</script>