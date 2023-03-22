<template>
  <Header/>
  <h1>
    Home Page
  </h1>
</template>

<script>
import Header from "@/components/Header.vue";

export default {

  name: 'HomePage',
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