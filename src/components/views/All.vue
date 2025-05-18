<!-- 모든 제품 페이지 -->

<template>
    <div class="Blank"></div>
    <div class="all wrap flex-column-center">
    <h2 class="h2">Product</h2>
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
    <!-- ✅ 더보기 버튼 추가 -->
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

const { products, toggleLike } = useProducts(allProducts)

// 더보기 기능을 위한 상태 관리
const perPage = 10
const visibleCount = ref(perPage)

const visibleProducts = computed(() =>
  products.value.slice(0, visibleCount.value)
)

const showMore = () => {
  visibleCount.value += perPage
}


</script>


<style scoped>

.all {
  min-height: 700px;
  margin-bottom: 90px;
  margin-top: 70px;
}
.all h2 {
    /* position: sticky;
    top: 0;
    z-index: 10;
    padding: 16px 0;
    text-align: center; */
}
.all ul {
    /* width: 1440px; */
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr)); /* 줄당 5개 */
    gap: 58px 32px;
}
.all ul li {
    position: relative;
}
.all ul li img {
    /* width: 251px;
    height: 247px; */
    width: 216px;
    height: 216px;
    object-fit: cover;
    border: 1px solid #a0a0a0;
}
.all ul li p {
    color: #5e5e5e;
    font-size: 15px;
}

</style>