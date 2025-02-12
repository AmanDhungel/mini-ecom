<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Cart({{ cartItemCount }})</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { computed } from "vue";
import { useCartStore } from "./stores/cart";

export default {
  setup() {
    const cartStore = useCartStore();
    const cartItemCount = computed(() =>
      cartStore.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    );
    return { cartItemCount };
  },
};
</script>
<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

nav {
  background-color: #4f46e5;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
}

nav a.router-link-exact-active {
  color: #42b883;
}
</style>
