<template>
  <div class="p-8 flex flex-grow">
    <MarketListings/>
  </div>
</template>

<script>
import MarketListings from "@/components/organisms/MarketListings";

export default {
  name: 'Home',
  components: {
    MarketListings,
  }
}
</script>
