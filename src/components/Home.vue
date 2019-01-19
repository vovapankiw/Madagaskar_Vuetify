<template>
<div class="carousel_container">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/slides/slide1.jpg" class="d-block w-100" alt="природа">
    </div>
    <div class="carousel-item">
      <img src="../assets/slides/slide2.jpg" class="d-block w-100" alt="краєвид">
    </div>
    <div class="carousel-item">
      <img src="../assets/slides/slide3.jpg" class="d-block w-100" alt="мальовничий краєвид">
    </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

</template>

<script>
export default {
  data(){
    return {
      img:[
        {slide1: './slide1.jpg'},
        {slide2:'../assets/slides/slide2.jpg'},
        {slide3:'../assets/slides/slide3.jpg'},
        {slide4:'../assets/slides/slide4.jpg'}
      ]
    }
  },
   created() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
  .carousel_container {
    max-width: 100%;
    margin: auto;
    margin-top: 1%;
  }
</style>
