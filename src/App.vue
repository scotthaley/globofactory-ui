<template>
  <div class="bg-bg1 flex-grow text-text flex flex-col justify-items-stretch">
    <Header/>
    <div class="p-8 flex flex-grow">
      <MarketListings/>
    </div>
  </div>
</template>

<script>

import Header from "@/components/molecules/Header";
import MarketListings from "@/components/organisms/MarketListings";
export default {
  name: 'App',
  components: {
    MarketListings,
    Header,
  }
}
</script>

<style>
body, html {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  display: flex;
  height: 100%;
}
</style>
