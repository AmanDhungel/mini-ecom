<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title" class="product-image" />
    <div class="product-details">
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-price">${{ product.price }}</p>
      <button
        @click="$router.push(`/product/${product.id}`)"
        class="view-details-button">
        View Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  margin: 16px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.product-details {
  padding: 16px;
}

.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}

.view-details-button {
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.view-details-button:hover {
  background-color: #45a049;
}
</style>
