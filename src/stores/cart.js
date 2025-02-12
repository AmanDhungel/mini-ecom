import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [],
    }),
    getters: {
        totalPrice: (state) => {
            return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
    actions: {
        addToCart(product) {
            const existingProduct = this.cartItems.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                this.cartItems.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(productId) {
            this.cartItems = this.cartItems.filter(item => item.id !== productId);
        },
        clearCart() {
            this.cartItems = [];
        },
    },
});