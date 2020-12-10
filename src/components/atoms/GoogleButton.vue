<template>
  <button class="google"></button>
</template>

<script>
export default {
  name: "GoogleButton"
}
</script>

<style scoped>
.google {
  background-image: url('../../assets/google-button-2x/btn_google_signin_dark_normal_web@2x.png');
  background-size: cover;
  width: 305px;
  height: 73px;
}
.google:focus {
  background-image: url('../../assets/google-button-2x/btn_google_signin_dark_focus_web@2x.png');
}
.google:disabled {
  background-image: url('../../assets/google-button-2x/btn_google_signin_dark_disabled_web@2x.png');
}
.google:active {
  background-image: url('../../assets/google-button-2x/btn_google_signin_dark_pressed_web@2x.png');
}
</style>