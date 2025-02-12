<template>
  <div>
    <SearchBar @search="handleSearch" />
    <ErrorDisplay :errorMessage="errorMessage" />
    <div v-if="loading">Loading...</div>
    <div v-else class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import ProductCard from "../components/ProductCard.vue";
import SearchBar from "../components/SearchBar.vue";
import ErrorDisplay from "../components/ErrorDisplay.vue";

export default {
  components: { ProductCard, SearchBar, ErrorDisplay },
  setup() {
    const products = ref([]);
    const filteredProducts = ref([]);
    const loading = ref(true);
    const errorMessage = ref(null);
    const searchTerm = ref("");

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        products.value = await response.json();
        filteredProducts.value = products.value; // Initialize filtered products
      } catch (error) {
        errorMessage.value = "Error fetching products. Please try again later.";
        console.error(error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchProducts);

    const handleSearch = (term) => {
      searchTerm.value = term.toLowerCase();
      filterProducts();
    };

    const filterProducts = computed(() => {
      if (!searchTerm.value) {
        return products.value;
      }
      return products.value.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.value) ||
          product.category.toLowerCase().includes(searchTerm.value)
      );
    });

    return { products, filteredProducts, loading, errorMessage, handleSearch };
  },
};
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
}
</style>
