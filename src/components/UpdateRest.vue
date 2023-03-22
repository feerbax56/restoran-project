Home.vue<template>
  <Header/>
  <h1>
    Hello username, welcome and Update Restaurant Page
  </h1>
</template>

<script>
import Header from "@/components/Header.vue";

export default {

  name: 'UpdateRest',
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