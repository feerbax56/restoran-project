<template>
  <Header/>
  <h1>
    Hello {{ name }}, welcome to home page
  </h1>
  <table class="table">

    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
    </tr>

    <tr v-for="item in restaurant" :key=item.id>
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/UpdateRest/' + item.id">Update</router-link>
      </td>
    </tr>

  </table>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";

export default {

  name: 'HomePage',
  data() {
    return {
      name: '',
      restaurant: []
    }
  },
  components: {
    Header
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name;
    console.log(name);
    if (!user) {
      this.$router.push({name: 'SignUp'})
    }
    let result = await axios.get('http://localhost:3000/restaurant');
    this.restaurant = result.data
  }
}
</script>


<style>
td {
  width: 160px;
  height: 40px;
  border: 1px solid blueviolet;
}

.table {
  margin: 0 auto;
}

</style>