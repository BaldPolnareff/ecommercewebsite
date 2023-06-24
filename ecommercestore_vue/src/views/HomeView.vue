<script setup>

</script>

<script>
    import axios from 'axios'

    export default {
        name: 'HomeView',
        data() {
            return {
                latestProducts: []
            }
        }, 
        components: {
            
        }, 
        mounted(){
            
        }
    }
</script>

<template>
    <div class="home">
        <section class="hero">
            <div class="hero-body has-text-centered">
                <p class="title">
                    Welcome to Ecommerce
                </p>
                <p class="subtitle">
                    A simple ecommerce store built with Vue.js
                </p>
            </div>
        </section>

        <div class="columns is-multiline">
            <div class="column is-12">
                <h2 class="is-size-3 has-text-centered">Latest Products</h2>
            </div>
            <div class="column is-4" 
                v-for="product in latestProducts" 
                v-bind:key="product.id"
            ></div>
            <div class="box">
                <figure class="image mb-4">
                    <img :src="product.get_thumbnail">
                </figure>
                <h3 class="title is-5">{{ product.name }}</h3>
                <p class="subtitle is-6">${{ product.price }}</p>

                View Details
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import '../../node_modules/bulma/bulma.sass';
    @import '../../node_modules/bulma/css/bulma.css';

    .home {
        padding-top: 40px;
    }
    .title {
        font-size: 2rem;
        color: whitesmoke;
    }
</style>