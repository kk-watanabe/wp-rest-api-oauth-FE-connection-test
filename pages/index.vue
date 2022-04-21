<template>
  <div>
    test
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

onMounted(() => {
  console.log("Home onMounted");
  console.log(route);
});
</script>