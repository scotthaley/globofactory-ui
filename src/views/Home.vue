<template>
  <div class="p-8 flex flex-grow">
    <MarketListings />
  </div>
</template>

<script lang="ts">
import MarketListings from '@/components/organisms/MarketListings.vue'

export default {
  name: 'Home',
  components: {
    MarketListings
  },
}
</script>
