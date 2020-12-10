<template>
  <div class="bg-bg2 rounded-lg w-1/2 max-w-2xl mx-auto mt-10 p-8 shadow-inner">
    <h2 class="text-3xl">Login</h2>
    <div class="text-center mt-8">
      <GoogleButton @click="login"/>
    </div>
  </div>
</template>

<script>
import GoogleButton from "@/components/atoms/GoogleButton";
import {mapActions} from "vuex";
export default {
name: "SignIn",
  components: {GoogleButton},
  methods: {
    ...mapActions('auth', [
        'login'
    ])
  }
}
</script>

<style scoped>

</style>