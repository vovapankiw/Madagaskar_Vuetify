<template>
  <div>
    <div class="navbar__container">
      <div>
        <img src="../assets/madagascar.png" alt="logo">
      </div>
      <div>
        <div class="header_contacts_wrapper">
          <div class="tel">+38(067)95-00-887<i class="fas fa-phone"></i></div>
          <div class="tel">+38(067)95-00-387<i class="fas fa-phone"></i></div>
          <div class="mail">madagascar.lviv@gmail.com<a href="mailto:madagascar.lviv@gmail.com"><i class="far fa-envelope"></i></a></div>
        </div>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link :to="{path:'/'}">Головна</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{path:'/'}">Галерея</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{path:'/'}">Доставка і <br>Оплата</router-link>
          </li>
          <li class="nav-item">
             <router-link :to="{path:'/'}">Про нас</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar__container {
    background-color: green;
    display: flex;
    justify-content: space-between;
  }

  .header_contacts_wrapper {
    display: flex;
  }
</style>
