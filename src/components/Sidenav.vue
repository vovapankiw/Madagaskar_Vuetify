<template>
  <div>
    <ul>
      <router-link 
        class="goods_list" 
        :to="{ name:good.name }" 
        tag="li" 
        active-class="active" 
        exact
        v-for="good in goods" :key='good.id'>
        <a>{{ good.title }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods:[
        {  id:1,
          title:'Усі товари',
          name:'products'
        },
        {
           id:2,
          title:'Кипарис',
          name:'cyparis'
        },
        { id:3,
          title:'Модрина',
          name:'modrina'
        },
        { id:4,
          title:'Сосна',
          name:'sosna'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .goods_list {
    list-style-type: none;
  }
</style>
