<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="product">
    <img :src="product.image" :alt="product.title" />
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
  <div v-else>Product not found.</div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../stores/cart";

export default {
  setup() {
    const route = useRoute();
    const product = ref(null);
    const loading = ref(true);
    const cartStore = useCartStore();

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${route.params.id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        product.value = await response.json();
        loading.value = false;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(fetchProduct);

    const addToCart = (product) => {
      cartStore.addToCart(product);
    };

    return {
      product,
      loading,
      addToCart,
    };
  },
};
</script>
