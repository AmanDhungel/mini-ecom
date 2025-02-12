<template>
  <div>
    <input type="text" v-model="searchTerm" placeholder="Search products..." />
    <button @click="handleSearch">Search</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  emits: ["search"],
  setup(props, { emit }) {
    const searchTerm = ref("");

    const handleSearch = () => {
      emit("search", searchTerm.value);
    };

    return { searchTerm, handleSearch };
  },
};
</script>
