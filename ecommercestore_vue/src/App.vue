<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<script>
    export default {
    data() {
      return {
        showMobileMenu: false,
        }
      }
    }
</script>

<template>
  <div class="wrapper">
    <nav class="navbar is-dark" >
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
            <strong>Ecommerce</strong>
        </router-link>
        <a 
          class="navbar-burger" 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="navbar-menu"
          @click="showMobileMenu = !showMobileMenu"
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
      </div>

      <div 
        class="navbar-menu" 
        id="navbar-menu"
        v-bind:class="{ 'is-active': showMobileMenu }"
      >
        <router-link to="/summer">Summer</router-link>
        <router-link to="/winter">Winter</router-link>
      </div>

      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/log-in" class="button is-light">Log in</router-link>
          <router-link to="/cart" class="button success">
            <span class="icon">
              <!--i class="fas fa-shopping-cart"></i-->
              🛍️
            </span>
            <span>Cart</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>

  <section class="section">
    <router-view />
  </section>

  <footer class="footer">
    <p class="has-text-centered">Copyright (c) 2023</p>
  </footer>
</template>

<style scoped>
  @import '../node_modules/bulma/bulma.sass';
  @import '../node_modules/bulma/css/bulma.css';

  .footer {
    margin-top: 50px;
    color: #181818;
  }

  a.button.success {
    background-color: #7B43FF;
    color: whitesmoke;
  }


</style>
