Home.vue
<template>
  <Header/>
  <h1>
    Hello {{name}}, welcome and Add Restaurant Page
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
import axios from 'axios'

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
      },
      name: '',
    }
  },
  methods: {
    async addRestaurant() {
      const result = await axios.post('http://localhost:3000/restaurant', {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      })
      if (result.status === 201) {
        this.$router.push({name: "HomePage"})
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({name: 'SignUp'})
    }
  }
}
</script>