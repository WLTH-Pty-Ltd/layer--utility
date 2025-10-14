<template>
  <div>
    <pre>
      {{ countdown }}
    </pre>
  </div>
</template>

<script setup lang="ts">
const countdown = returnCountdown(new Date(), new Date('6/6/1992'));
</script>

<style scoped></style>