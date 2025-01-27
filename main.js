const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_blue.jpg',
      inStock: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      cart: 0,
  }
  },
  methods: {
    addToCart() {
        this.cart += 1
    }, 
    updateImage(val) {
        this.image = val
    },
    removeFromCart() {
      if (this.cart >= 1) {
          this.cart -= 1
      }
  },
}
})