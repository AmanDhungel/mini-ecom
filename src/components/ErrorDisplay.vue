<template>
  <div v-if="errorMessage" class="error-display">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.error-display {
  color: #ff4d4d;
  background-color: #ffe6e6;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid #ffcccc;
}
</style>
