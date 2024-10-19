<script setup>

const newsLetter = new URL ('@/assets/images/newsletter.jpg', import.meta.url).href;
</script>

<template>
  <div>
     <section
      class="news-part"
      :style="{ 
        background: 'url(' + newsLetter +') center center no-repeat'

      }"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 col-lg-6 col-xl-7">
            <div class="news-text">
              <h2>Get 20% Discount for Subscriber</h2>
              <p>Lorem ipsum dolor consectetur adipisicing accusantium</p>
            </div>
          </div>
          <div class="col-md-7 col-lg-6 col-xl-5">
            <form class="news-form">
              <input
                type="text"
                placeholder="Enter Your Email Address"
              /><button>
                <span><i class="icofont-ui-email"></i>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>

</style>