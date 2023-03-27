Home.vue
<template>
  <Header/>
  <h1>
    Hello username, welcome and Add Restaurant Page
  </h1>

  <form action="" class="add">
    <input type="text" name="name" placeholder="enter name" v-model="restaurant.name">
    <input type="text" name="address" placeholder="enter address" v-model="restaurant.address">
    <input type="text" name="contact" placeholder="enter contact" v-model="restaurant.contact">
    <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
  </form>
</template>

<script>
import Header from "@/components/Header.vue";

export default {

  name: 'AddRest',
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
  methods: {
    addRestaurant() {
      console.log(this.restaurant)
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