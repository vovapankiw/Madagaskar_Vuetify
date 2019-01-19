<template>
  <nav>
   <v-toolbar flat app>
     <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
     <v-toolbar-title class="text-uppercase grey--text">
       <span class="font-weight-light">Mada</span>
       <span>gaskar</span>
     </v-toolbar-title>
     <v-spacer></v-spacer>

    <v-menu offset-y>
      <v-btn flat small slot="activator" color="grey">
        <v-icon left>expand_more</v-icon>
        <span>Menu</span>
      </v-btn>
      <v-list>
        <v-list-tile v-for="link in menuLinks" :key="link.text" router :to="link.route">
          <v-list-tile-title >
            {{ link.text }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

     <v-btn flat small color="grey">
       <v-icon right>shopping_cart</v-icon>
     </v-btn>
   </v-toolbar>
   <v-navigation-drawer app class="green" v-model="drawer">
     <v-layout justify-space-around>
       <v-flex class="mt-4 mb-3 ml-3">
          <img src="../assets/madagascar.png" alt="logo" class="sidebar_img">
       </v-flex>
     </v-layout>
     <v-list>
         <v-list-tile v-for="link in sidebarLinks" :key="link.text" router :to="link.route" class="sidebar__link">
           <v-list-tile avatar>
             <v-list-tile-avatar>
               <img :src="link.img">
             </v-list-tile-avatar>
           </v-list-tile>
           <v-list-tile-content>
             <v-list-tile-title class="white--text">{{ link.text}}</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
     </v-list>
   </v-navigation-drawer>
  </nav>
</template>

<script>


export default {
  data() {
    return {
      drawer: false,
      menuLinks: [
        {icon: 'dashboard', text:'Головна', route:'/'},
        {icon: 'folder', text:'Галерея', route:'/gallary'},
        {icon: 'person', text:'Доставка і оплата', route:'/delivery'},
        {icon: 'person', text:'Про нас', route:'/team'}
      ],
      sidebarLinks: [
        { text:'Всі товари', route:'/products', img:'https://firebasestorage.googleapis.com/v0/b/madagascar-test.appspot.com/o/products%2Fcyparis%2Falumii.jpg?alt=media&token=afc1b2f8-5634-4320-9ee0-f37c5f757551'},
        { text:'Кипарис', route:'/cyparis', img:'https://firebasestorage.googleapis.com/v0/b/madagascar-test.appspot.com/o/products%2Fcyparis%2Fivonne.jpg?alt=media&token=dc535d15-2d51-4db7-ac2c-997785d4b40b'},
        { text:'Модрина', route:'/modrina', img:'https://firebasestorage.googleapis.com/v0/b/madagascar-test.appspot.com/o/products%2Fmodrina%2Flarix_decidua.jpg?alt=media&token=fd2eb2c4-28c0-40f6-8c21-56367a82babd'},
        { text:'Сосна', route:'/sosna', img:'https://firebasestorage.googleapis.com/v0/b/madagascar-test.appspot.com/o/products%2Fsosna%2Fspielberg.jpg?alt=media&token=86314e83-6f68-4996-b7ff-2bcc944ddb9f'}
      ],
      snackbar:false
    }
  },

}
</script>

<style>
  .sidebar_img {
    width: 90%;
  }
  .sidebar__link a {
    text-decoration: none;
  }
  .sidebar__tooltip {
    margin-left:5%;
  }
</style>
