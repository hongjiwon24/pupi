// ✅ useProducts.js
import { ref, computed, onMounted, watch } from 'vue'

// 1. 로컬스토리지 키
const LOCAL_KEY = 'pupi-liked-products'

// 2. 모든 상품 한꺼번에 정리 (여기서 이미지 import도 같이 해야 함)
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

export const allProducts = [ // 이름, 가격, 카테고리, 이미지, 좋아요
    // Animal 카테고리
    { name: 'Baby elpnt', price: 20000, category: 'animal', image: elpnt, liked: false },
    { name: 'Baby Cat', price: 20000, category: 'animal', image: cat_w, liked: false },
    { name: 'Baby Dog (White)', price: 20000, category: 'animal', image: dog_w, liked: false },
    { name: 'Baby Bear', price: 20000, category: 'animal', image: bear, liked: false },
    { name: 'Baby Rabbit', price: 20000, category: 'animal', image: rabbit, liked: false },
    { name: 'Baby Dog (Brown)', price: 20000, category: 'animal', image: dog_b, liked: false },

    // Food 카테고리
    { name: 'Baby Corn', price: 18000, category: 'food', image: corn, link: '/event', liked: false },
    { name: 'Baby Tomato', price: 18000, category: 'food', image: tomato, link: '/event', liked: false },
    { name: 'Baby Peach', price: 18000, category: 'food', image: peach, link: '/event', liked: false },
    { name: 'Baby potato', price: 20000, category: 'food', image: potato, link: '/event', liked: false },
    { name: 'Strawberry Milk', price: 20000, category: 'food', image: st_milk, link: '/event', liked: false },
    { name: 'Strawberry Milk', price: 20000, category: 'food', image: st_milk, link: '/event', liked: false },
    { name: 'Strawberry Milk', price: 20000, category: 'food', image: st_milk, link: '/event', liked: false },

]





// ✅ composables/useProducts.js
// import { ref, computed, onMounted, watch } from 'vue'

// const LOCAL_KEY = 'pupi-liked-products'

export function useProducts(initialProducts) {
  const products = ref(initialProducts)

  // 로컬스토리지에서 찜 상태 불러오기
  onMounted(() => {
    const stored = localStorage.getItem(LOCAL_KEY)
    if (stored) {
      const likedList = JSON.parse(stored)
      products.value.forEach((item, i) => {
        item.liked = likedList[i] || false
      })
    }
  })

  // 찜 상태 변경 시 저장
  watch(products, (newVal) => {
    const likedList = newVal.map(p => p.liked)
    localStorage.setItem(LOCAL_KEY, JSON.stringify(likedList))
  }, { deep: true })

  // 찜 상태 토글
  const toggleLike = (index) => {
    products.value[index].liked = !products.value[index].liked
  }

  // 찜한 상품만 필터링
  const likedProducts = computed(() =>
    products.value.filter(p => p.liked)
  )

  return {
    products,
    toggleLike,
    likedProducts
  }
}