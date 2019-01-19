<template>
<div>
  <div 
    class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 all_products_container"
    v-for="(product, index) in showProducts" :key="index">
    <div class="card product" w-25 p-3>
      <img class="card-img-top" :src="product.img" 
          alt="${product.title}">
      <div class="card-body">
        <h4 class="card-title">{{ product.title }}</h4>
        <button class="btn btn-info" data-toggle="modal"
          data-target="#productInfoModal">Info
        </button>
        <button class="btn btn-primary buy">
          {{product.price}} - Buy
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      products: [] 
    }
  },
  computed: {
    showProducts() {
      return  this.$store.state.products;
    }
  }
} 
</script>

<style scoped>
  h4.card-title {
    font-size: 15px;
  }
</style>
