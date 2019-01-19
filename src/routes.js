import Home from './components/Home.vue';
import Cyparis from './components/goods/Cyparis.vue';
import Modrina from './components/goods/Modrina.vue';
import Sosna from './components/goods/Sosna.vue';
import AllGoods from './components/goods/AllGoods.vue';

export const routes = [
  { path: '/',  component: Home} ,
  {path:'/products', name:'products', component: AllGoods},
  { path: '/cyparis', name:'cyparis', component: Cyparis },
  { path: '/modrina', name:'modrina', component: Modrina },
  { path: '/sosna', name:'sosna', component: Sosna },
  { path: '*', redirect: '/'}
]