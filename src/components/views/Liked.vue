<!-- Liked.vue -->
<template>
  <div class="like wrap flex-column-center">
    <h2 class="h2">찜한 상품</h2>
    <ul class="product-list">
      <li v-for="(item, index) in likedProducts" :key="item.name">
        <router-link :to="item.link">
          <img :src="item.image" :alt="item.name" />
          <p>{{ item.name }}<strong><br>{{ item.price.toLocaleString() }}원</strong></p>
        </router-link>
        <button class="like-btn" @click="toggleLike(index)">
          <span :class="['heart', item.liked ? 'on' : '']">
            {{ item.liked ? '❤️' : '🤍' }}
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

import { useProducts } from '@/composables/useProducts'
import elpnt from '@/assets/img/elpnt.png'
import cat_w from '@/assets/img/cat_w.png'
import bear from '@/assets/img/bear.png'
import dog_w from '@/assets/img/dog_w.png'
import rabbit from '@/assets/img/rabbit.png'
import dog_b from '@/assets/img/dog_b.png'
import corn from '@/assets/img/corn.png'
import tomato from '@/assets/img/tomato.png'
import peach from '@/assets/img/peach.png'
import potato from '@/assets/img/potato.png'
import st_milk from '@/assets/img/st_milk.png'

const LOCAL_KEY = 'pupi-liked-products'

const products = ref([
    // Animal 카테고리
    { name: 'Baby elpnt', price: 20000, category: 'animal', image: elpnt, liked: false },
    { name: 'Baby Cat', price: 20000, category: 'animal', image: cat_w, liked: false },
    { name: 'Baby Dog (White)', price: 20000, category: 'animal', image: dog_w, liked: false },
    { name: 'Baby Bear', price: 20000, category: 'animal', image: bear, liked: false },
    { name: 'Baby Rabbit', price: 20000, category: 'animal', image: rabbit, liked: false },
    { name: 'Baby Dog (Brown)', price: 20000, category: 'animal', image: dog_b, liked: false },
    { name: 'Baby Dog (Brown)', price: 20000, category: 'animal', image: dog_b, liked: false },

    // Food 카테고리
    { name: 'Baby Corn', price: 18000, category: 'food', image: corn, link: '/event', liked: false },
    { name: 'Baby Tomato', price: 18000, category: 'food', image: tomato, link: '/event', liked: false },
    { name: 'Baby Peach', price: 18000, category: 'food', image: peach, link: '/event', liked: false },
    { name: 'Baby potato', price: 20000, category: 'food', image: potato, link: '/event', liked: false },
    { name: 'Strawberry Milk', price: 20000, category: 'food', image: st_milk, link: '/event', liked: false },
    { name: 'Strawberry Milk', price: 20000, category: 'food', image: st_milk, link: '/event', liked: false },
    { name: 'Strawberry Milk', price: 20000, category: 'food', image: st_milk, link: '/event', liked: false },
])

onMounted(() => {
  const stored = localStorage.getItem(LOCAL_KEY)
  if (stored) {
    const likedList = JSON.parse(stored)
    products.value.forEach((item, i) => {
      item.liked = likedList[i] || false
    })
  }
})

watch(products, (newVal) => {
  const likedList = newVal.map(p => p.liked)
  localStorage.setItem(LOCAL_KEY, JSON.stringify(likedList))
}, { deep: true })

const toggleLike = (index) => {
  products.value[index].liked = !products.value[index].liked
}

const likedProducts = computed(() =>
  products.value.filter(p => p.liked)
)
</script>

<style scoped>

.like {
  min-height: 700px;
  margin-bottom: 90px;
  margin-top: 70px;
  justify-content: normal;
}

.like h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr)); /* 줄당 5개 */
  gap: 58px 32px;
}

.product-list li {
  position: relative;
}

.product-list li img {
  width: 216px;
  height: 216px;
  object-fit: cover;
  border: 1px solid #a0a0a0;
}

.product-list li p {
  color: #5e5e5e;
  font-size: 15px;
}

</style>