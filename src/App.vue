<template>
 <div class="bg-gray-200 overflow-hidden rounded-lg  landscape:hidden">
    <div class="px-4 py-5 sm:p-6 text-center">
      <h1 class="font-semibold ">Best viewed in landscape orientation.</h1>
      <p>This page is optimized for larger screens (min 1366 px wide).</p>
    </div>
  </div>
  
  <UnitedEntertainment class="portrait:hidden" />

</template>

<script>
import UnitedEntertainment from './components/UnitedEntertainment.vue'

export default {
  components: {
    UnitedEntertainment
  }

}
</script>
