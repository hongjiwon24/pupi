<script setup>
import { useRoute } from 'vue-router'

import Popup from '@/components/common/Popup.vue'
import Header from '@/components/layout/Header.vue'
import Title from '@/components/views/Title.vue'
import CategorySection from '@/components/views/CategorySection.vue'
import Section1 from '@/components/views/Section1.vue'
import Section2 from '@/components/views/Section2.vue'
import Section3 from '@/components/views/Section3.vue'
import Footer from '@/components/layout/Footer.vue'
import Aside from '@/components/layout/Aside.vue'


import '@/assets/reset.css'
import '@/assets/style.css'

const route = useRoute()

const fullScreenRoutes = ['/all', '/baby_animal', '/baby_Food', '/event', '/goevent', '/liked', '/login']  // 단독으로 보여줄 경로
</script>


<template>

  <!-- 이벤트 페이지는 전체화면 단독 출력 -->
  <template v-if="fullScreenRoutes.includes(route.path)">
    <Header />
    <router-view />
    <Footer />
    <Aside />
  </template>

  <!-- 일반 페이지는 공통 컴포넌트 + 해당 페이지 -->
  <template v-else>
    <Header />
    <Title />
    <CategorySection />
    <Section2 />
    <Section1 />
    <Section3 />
    <Footer /> 

    <!-- Aside -->
    <Aside />
    <!-- 팝업 추가 (페이지 내용과는 별개로 화면에 뜸) -->
    <Popup />
  </template>
</template>




<style scoped>

div {
  
}
Header {
  
}
Title {
  
}






/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
