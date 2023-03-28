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
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
  </form>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from 'axios'

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
  methods: {
    async updateRestaurant() {
      const result = await axios.put('http://localhost:3000/restaurant/' + this.$route.params.id, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      })
      if (result.status === 200) {
        this.$router.push({name: "HomePage"})
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info')

    if (!user) {
      this.$router.push({name: 'SignUp'})
    }
    const result = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id)
    this.restaurant = result.data
  }
}
</script>