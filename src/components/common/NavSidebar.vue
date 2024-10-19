<script setup>



import $ from 'jquery';

// Function to close the menu
function closeMenu() {
  $("body").css("overflow", "inherit");
  $(".nav-sidebar").removeClass("active");
  $(".backdrop").fadeOut();
}
</script>

<template>
  <div>
    <aside class="nav-sidebar">
      <div class="nav-header">
        <a href="#"><img src="@/assets/images/logo.png" alt="logo" /></a
        ><button class="nav-close" @click="closeMenu"><i class="icofont-close"></i></button>
      </div>
      <div class="nav-content">
        <ul class="nav-list">
          <li>
            <router-link :to="{name: 'index'}" class="nav-link"><i class="icofont-home"></i>Home</router-link>
          </li>

          <li>
            <a class="nav-link" href="contact.html"
              ><i class="icofont-contacts"></i>contact us</a
            >
          </li>

          <li>
            <a class="nav-link" href="login.html"
              ><i class="icofont-logout"></i>logout</a
            >
          </li>
        </ul>
        <div class="nav-info-group">
          <div class="nav-info">
            <i class="icofont-ui-touch-phone"></i>
            <p><small>call us</small><span>(+880) 183 8288 389</span></p>
          </div>
          <div class="nav-info">
            <i class="icofont-ui-email"></i>
            <p><small>email us</small><span>support@greeny.com</span></p>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>


<style scoped>

</style>