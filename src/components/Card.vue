<script setup>
defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>
<template>
  <div class="p-6 rounded-lg shadow-md" :class="bg">
    <slot />
  </div>
</template>
<style lang="css" scoped></style>
