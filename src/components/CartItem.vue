<template>
  <div class="cart-item">
    <img :src="item.image" :alt="item.title" class="cart-item-image" />
    <div class="cart-item-details">
      <h3>{{ item.title }}</h3>
      <p>Quantity: {{ item.quantity }}</p>
      <p>Price: ${{ (item.price * item.quantity).toFixed(2) }}</p>
      <button @click="removeFromCart(item)">Remove</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const cartStore = useCartStore();

    const removeFromCart = (item) => {
      cartStore.removeFromCart(item.id);
    };

    return { removeFromCart };
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  margin-bottom: 1rem;
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-right: 1rem;
}

.cart-item-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-item-details button {
  margin-top: 0.5rem;
}
</style>
