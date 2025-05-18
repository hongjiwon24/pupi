import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/views/Home.vue'

import All from '@/components/views/All.vue'
import Baby_Animal from '@/components/views/Baby_Animal.vue'
import Baby_Food from '@/components/views/Baby_Food.vue'
import Event from '@/components/views/Event.vue'
import Goevent from '@/components/views/Goevent.vue'

import Liked from '@/components/views/Liked.vue'
import Login from '@/components/views/Login.vue'




const routes = [
  { path: '/', // 홈버튼
     component: Home,
  },
  { path: '/all', // 제품 페이지
      component: All,
  },
  { path: '/baby_animal', // Baby_Animal 페이지
      component: Baby_Animal,
  },
  { path: '/baby_Food', // Baby_Food 페이지
      component: Baby_Food,
  },
  { path: '/event', // 이벤트 설명 페이지
      component: Event,
  },
  { path: '/goevent', // 실제 이벤트 페이지
      component: Goevent,
  },
  { path: '/liked', // 찜목록 페이지
      component: Liked 
  },
  { path: '/login', // 로그인 페이지
      component: Login,
  },
];



const router = createRouter({
  history: createWebHistory(), // 브라우저 히스토리 API 사용 (주소에 # 없이 작동)
  routes, // 미리 정의한 라우트 목록을 등록
  scrollBehavior(to, from, savedPosition) { // 페이지 전환 시 항상 맨 위로 이동
    return { top: 0 }; 
  }
});


router.beforeEach((to, from, next) => {
  const fullScreenRoutes = ['/event', '/goevent']; // 전체화면으로 보여줄 라우트 목록
  
  if (fullScreenRoutes.includes(to.path)) {
    document.body.classList.add('fullscreen'); // 전체화면 라우트일 경우 body에 클래스 추가
  } else {
    document.body.classList.remove('fullscreen'); // 그 외 라우트에선 클래스 제거
  }

  next(); // 반드시 호출해야 다음 라우터로 넘어감
  
});


export default router
