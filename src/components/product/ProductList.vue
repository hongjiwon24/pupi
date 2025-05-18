<!-- 제품 5개씩 1줄 -->

<template>
  <div class="product_l wrap flex">
    <ul class="product-list">
      <li v-for="(item, index) in products" :key="item.name"> <!-- 상품 하나씩 반복 렌더링 -->
        <router-link :to="item.link"> 
          <img :src="item.image" :alt="item.name" /> <!-- 상품 이미지 바인딩 -->
          <p>{{ item.name }}<strong><br>{{ item.price.toLocaleString() }}원</strong></p> <!-- 상품 이름 + 가격 출력 -->
        </router-link>
        <button class="like-btn" @click="toggleLike(index)"> <!-- 찜하기 버튼 -->
            <span :class="['heart', item.liked ? 'on' : '']">
              {{ item.liked ? '❤️' : '🤍' }}
            </span>
        </button>
      </li>
    </ul>
  </div>
</template>


<script setup>
import { ref } from 'vue' // 반응형 상태 관리를 위해 ref 사용

import elpnt from '@/assets/img/elpnt.png'
import cat_w from '@/assets/img/cat_w.png'
import bear from '@/assets/img/bear.png'
import dog_w from '@/assets/img/dog_w.png'
import rabbit from '@/assets/img/rabbit.png'
import dog_b from '@/assets/img/dog_b.png'
import corn from '@/assets/img/corn.png'
import tomato from '@/assets/img/tomato.png'
import peach from '@/assets/img/peach.png'
import st_milk from '@/assets/img/st_milk.png'


const products = ref([ // 상품 데이터 (이름, 가격, 이미지, 링크이동, 좋아요)
  { name: 'Baby Elephant', price: 20000, image: elpnt, link: '/event', liked: false },
  { name: 'Baby Cat', price: 20000, image: cat_w, link: '/event', liked: false },
  { name: 'Baby Bear', price: 20000, image: bear, link: '/event', liked: false },
  { name: 'Baby Bear', price: 20000, image: dog_w, link: '/event', liked: false },
  { name: 'Baby Elephant', price: 20000, image: rabbit, link: '/event', liked: false },
  { name: 'Baby Elephant', price: 20000, image: dog_b, link: '/event', liked: false },
  { name: 'Baby Cat', price: 20000, image: corn, link: '/event', liked: false },
  { name: 'Baby Bear', price: 20000, image: tomato, link: '/event', liked: false },
  { name: 'Baby Bear', price: 20000, image: peach, link: '/event', liked: false },
  { name: 'Baby Elephant', price: 20000, image: st_milk, link: '/event', liked: false }
])


const toggleLike = (index) => {  // 찜 상태 토글 함수
  products.value[index].liked = !products.value[index].liked
}
</script>


<style scoped>

.product_l {
    justify-content: center;
    margin-top: 8px;
}
.product_l ul {
    /* width: 1440px; */
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr)); /* 줄당 5개 */
    gap: 58px 32px; /* 원하는 간격 */
}
.product_l ul li {
  position: relative;
}
.product_l ul li a {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
}
.product_l ul li img {
    /* width: 251px;
    height: 247px; */
    width: 216px;
    height: 216px;
    object-fit: cover;
    border: 1px solid #a0a0a0;
    grid-column: 1 / span 2;
}
.product_l ul li p {
    color: #5e5e5e;
    font-size: 15px;
}



</style>