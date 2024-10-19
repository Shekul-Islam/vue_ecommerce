<script setup>
import Topbar from './components/common/Topbar.vue';
import Header from './components/common/Header.vue';
import Navbar from './components/common/Navbar.vue';
import CategorySidebar from './components/common/CategorySidebar.vue';
import CartSidebar from './components/common/CartSidebar.vue';
import NavSidebar from './components/common/NavSidebar.vue';
import MobileMenue from './components/common/MobileMenue.vue';
import ModalFade from './components/common/ModalFade.vue';
import NewsPart from './components/common/NewsPart.vue';
import IntroPart from './components/common/IntroPart.vue';
import Footer from './components/common/Footer.vue';
import { useRoute } from 'vue-router';
import Register from './views/pages/Register.vue';


const route = useRoute();



</script>
<template>
  <div>
    <div class="backdrop"></div>
  <a class="backtop fas fa-arrow-up" href="#"></a>
   

  <span v-if="route.meta.albab">
    <Register />
  </span>
  <span v-else>
    <div><Topbar/></div>

    <div><Header/></div>

    <div><Navbar/></div>

    <div><CategorySidebar/></div>

   <div><CartSidebar/></div>
    
    <div><NavSidebar/></div>

    <!-- mobile footer menu  -->
   <div><MobileMenue/></div>

  <div><ModalFade/></div>

    <RouterView></RouterView>

    

   <div><NewsPart/></div>

   
   <div><IntroPart/></div>

  <div><Footer/></div>
  </span>


   
  </div>
</template>

<style scoped>
</style>
