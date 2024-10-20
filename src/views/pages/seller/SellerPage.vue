<script setup>
// import { provide } from 'vue';

const bannerImage = new URL('@/assets/images/single-banner.jpg', import.meta.url).href;

// provide('bannerImage', bannerImage);

</script>

<template>
  <div>
    <section
    class="inner-section single-banner"
    :style="{
      background: 'url(' + bannerImage + ') center center no-repeat'
    }"
  >
  
      <div class="container"><h2>Seller Page</h2></div>
    </section>
    <section class="inner-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="top-filter">
              <div class="filter-show">
                <label class="filter-label">Show :</label
                ><select class="form-select filter-select">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="5">50</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 isotope-items"
        >
          <div class="col">
            <div class="product-card">
              <ul>
                <li>
                  <router-link :to="{name: 'seller-list'}" class="suggest-card"
                    ><img
                      src="http://127.0.0.1:8000/uploads/seller/shop/06302022121319pBkM9ZNbR53vC4RO_250_250.png"
                      alt="seller lists"
                  /></router-link>
                  <div class="brand-meta">
                    <h4 class="text-center">dafad</h4>
                    <p class="text-center">0 Products</p>
                    <div class="form-button">
                      
                        <button type="submit">
                          <router-link :to="{name: 'seller-list'}">
                          Visit Store <i class="fas fa-angle-right"></i>
                          </router-link>
                        </button>
                      
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="product-card">
              <ul>
                <li>
                  <router-link :to="{name: 'seller-list'}" class="suggest-card"
                    ><img
                      src="http://127.0.0.1:8000/uploads/seller/shop/06302022121319pBkM9ZNbR53vC4RO_250_250.png"
                      alt="seller lists"
                  /></router-link>
                  <div class="brand-meta">
                    <h4 class="text-center">dafad</h4>
                    <p class="text-center">0 Products</p>
                    <div class="form-button">
                      
                        <button type="submit">
                          <router-link :to="{name: 'seller-list'}">
                          Visit Store <i class="fas fa-angle-right"></i>
                          </router-link>
                        </button>
                      
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="product-card">
              <ul>
                <li>
                  <router-link :to="{name: 'seller-list'}" class="suggest-card"
                    ><img
                      src="http://127.0.0.1:8000/uploads/seller/shop/06302022121319pBkM9ZNbR53vC4RO_250_250.png"
                      alt="seller lists"
                  /></router-link>
                  <div class="brand-meta">
                    <h4 class="text-center">dafad</h4>
                    <p class="text-center">0 Products</p>
                    <div class="form-button">
                      
                        <button type="submit">
                          <router-link :to="{name: 'seller-list'}">
                          Visit Store <i class="fas fa-angle-right"></i>
                          </router-link>
                        </button>
                      
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="product-card">
              <ul>
                <li>
                  <router-link :to="{name: 'seller-list'}" class="suggest-card"
                    ><img
                      src="http://127.0.0.1:8000/uploads/seller/shop/06302022121319pBkM9ZNbR53vC4RO_250_250.png"
                      alt="seller lists"
                  /></router-link>
                  <div class="brand-meta">
                    <h4 class="text-center">dafad</h4>
                    <p class="text-center">0 Products</p>
                    <div class="form-button">
                      
                        <button type="submit">
                          <router-link :to="{name: 'seller-list'}">
                          Visit Store <i class="fas fa-angle-right"></i>
                          </router-link>
                        </button>
                      
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="product-card">
              <ul>
                <li>
                  <router-link :to="{name: 'seller-list'}" class="suggest-card"
                    ><img
                      src="http://127.0.0.1:8000/uploads/seller/shop/06302022121319pBkM9ZNbR53vC4RO_250_250.png"
                      alt="seller lists"
                  /></router-link>
                  <div class="brand-meta">
                    <h4 class="text-center">dafad</h4>
                    <p class="text-center">0 Products</p>
                    <div class="form-button">
                      
                        <button type="submit">
                          <router-link :to="{name: 'seller-list'}">
                          Visit Store <i class="fas fa-angle-right"></i>
                          </router-link>
                        </button>
                      
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="product-card">
              <ul>
                <li>
                  <router-link :to="{name: 'seller-list'}" class="suggest-card"
                    ><img
                      src="http://127.0.0.1:8000/uploads/seller/shop/06302022121319pBkM9ZNbR53vC4RO_250_250.png"
                      alt="seller lists"
                  /></router-link>
                  <div class="brand-meta">
                    <h4 class="text-center">dafad</h4>
                    <p class="text-center">0 Products</p>
                    <div class="form-button">
                      
                        <button type="submit">
                          <router-link :to="{name: 'seller-list'}">
                          Visit Store <i class="fas fa-angle-right"></i>
                          </router-link>
                        </button>
                      
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="product-card">
              <ul>
                <li>
                  <router-link :to="{name: 'seller-list'}" class="suggest-card"
                    ><img
                      src="http://127.0.0.1:8000/uploads/seller/shop/06302022121319pBkM9ZNbR53vC4RO_250_250.png"
                      alt="seller lists"
                  /></router-link>
                  <div class="brand-meta">
                    <h4 class="text-center">dafad</h4>
                    <p class="text-center">0 Products</p>
                    <div class="form-button">
                      
                        <button type="submit">
                          <router-link :to="{name: 'seller-list'}">
                          Visit Store <i class="fas fa-angle-right"></i>
                          </router-link>
                        </button>
                      
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="product-card">
              <ul>
                <li>
                  <router-link :to="{name: 'seller-list'}" class="suggest-card"
                    ><img
                      src="http://127.0.0.1:8000/uploads/seller/shop/06302022121319pBkM9ZNbR53vC4RO_250_250.png"
                      alt="seller lists"
                  /></router-link>
                  <div class="brand-meta">
                    <h4 class="text-center">dafad</h4>
                    <p class="text-center">0 Products</p>
                    <div class="form-button">
                      
                        <button type="submit">
                          <router-link :to="{name: 'seller-list'}">
                          Visit Store <i class="fas fa-angle-right"></i>
                          </router-link>
                        </button>
                      
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="bottom-paginate">
              <p class="page-info">Showing 12 of 60 Results</p>
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#"
                    ><i class="fas fa-long-arrow-alt-left"></i
                  ></a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">...</li>
                <li class="page-item">
                  <a class="page-link" href="#">60</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#"
                    ><i class="fas fa-long-arrow-alt-right"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
