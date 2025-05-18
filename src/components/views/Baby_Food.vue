<!-- Baby Animal 제품 페이지 -->

<template>
  <div class="baby_food wrap flex-column-center">
    <h2 class="h2">Baby Food</h2>
    <ul class="product-list">
      <li v-for="(item, index) in visibleProducts" :key="item.name">
        <router-link :to="item.link">
          <img :src="item.image" :alt="item.name" />
          <p>{{ item.name }}<strong><br>{{ item.price.toLocaleString() }}원</strong></p>
        </router-link>
        <button class="like-btn" @click="toggleLike(index)">
          <span :class="['heart', item.liked ? 'on' : '']">{{ item.liked ? '❤️' : '🤍' }}</span>
        </button>
      </li>
    </ul>
    <More_btn
    :show="visibleProducts.length < products.length"
    @click="showMore"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProducts, allProducts } from '@/composables/useProducts'
import More_btn from '@/components/common/More_btn.vue'

// ✅ foodList 먼저 정의한 후 useProducts에 넘기기
const foodList = allProducts.filter(p => p.category === 'food')
const { products, toggleLike } = useProducts(foodList)

// ✅ 1페이지당 10개씩 보여주기
const perPage = 10
const visibleCount = ref(perPage)

// ✅ 보여줄 상품 계산
const visibleProducts = computed(() =>
  products.value.slice(0, visibleCount.value)
)

// ✅ 더보기 버튼 클릭 시 증가
const showMore = () => {
  visibleCount.value += perPage
}
</script>

<style scoped>
.baby_food {
  min-height: 700px;
  margin-bottom: 90px;
  margin-top: 70px;
}
.baby_food h2 {

}
.baby_food ul {
    /* width: 1440px; */
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr)); /* 줄당 5개 */
    gap: 58px 32px;
}
.baby_food ul li {
  position: relative;
}
.baby_food ul li img {
    /* width: 251px;
    height: 247px; */
    width: 216px;
    height: 216px;
    object-fit: cover;
    border: 1px solid #a0a0a0;
}
.baby_food ul li p {
    color: #5e5e5e;
    font-size: 15px;
}
</style>
