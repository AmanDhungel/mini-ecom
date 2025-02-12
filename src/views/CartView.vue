<template>
  <div>
    <h2>Shopping Cart</h2>
    <div v-if="cartItems.length === 0">Your cart is empty.</div>
    <div v-else>
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
      <p>Total: ${{ totalPrice.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useCartStore } from "../stores/cart";
import CartItem from "../components/CartItem.vue";

export default {
  components: { CartItem },
  setup() {
    const cartStore = useCartStore();
    const cartItems = computed(() => cartStore.cartItems);
    const totalPrice = computed(() => cartStore.totalPrice);

    return { cartItems, totalPrice };
  },
};
</script>
<style scoped>
.cart-view {
  padding: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.cart-items {
  margin-bottom: 1rem;
}

.total-price {
  font-weight: bold;
  font-size: 1.2rem;
}

.empty-cart-message {
  color: #888;
}
</style>
