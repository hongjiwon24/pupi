<template>
  <transition name="fade">
    <div v-if="isVisible && isHomePage" class="popup-overlay" @click.self="closePopup">
      <div class="popup-content">
        <button class="close-btn" @click="closePopup">×</button>
        <h2><strong>랜덤 카드 뽑기 이벤트</strong></h2>
        <p>카드를 뒤집고 상품 받아가세요! 다양한 경품들이 쏟아져요!</p>
        <button class="event-btn"><router-link to="/goevent">이벤트 보러가기</router-link></button>
        <button class="disable-popup-btn" @click="disablePopup">다시 열리지 않음 X</button>
      </div>
    </div>
  </transition>
</template>

<!-- 로컬스토리지에 저장된 팝업 기록 삭제 -->
<!-- localStorage.removeItem('popupClosed'); -->

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const isHomePage = ref(false);

onMounted(() => {
  const path = window.location.pathname;

  // 로컬 테스트 환경에서도 작동하도록 "/" 또는 "/index.html" 처리
  if (path === '/' || path === '/index.html') {
    isHomePage.value = true;

    const popupClosed = localStorage.getItem('popupClosed');

    if (popupClosed !== 'true') {
      isVisible.value = true;
    }
  }
});
  
const closePopup = () => {
  isVisible.value = false;
};

const disablePopup = () => {
  localStorage.setItem('popupClosed', 'true');
  isVisible.value = false;
};
</script>


<style scoped>
.popup-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  min-width: 300px;
  max-width: 500px;
  height: 400px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close-btn {
  position: absolute;
  top: 10px; right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.event-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff6b6b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 154px;
}
.event-btn a {
  color: white !important;
}
.disable-popup-btn {
  border: none;
  cursor: pointer;
  font-weight: bold;
  background-color: white;
  position: absolute;
  right: 22px;
  bottom: 22px;
}

.event-btn:hover {
  background-color: #e64b4b;
}

</style>
