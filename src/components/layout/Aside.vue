<template>
    <div class="aside flex">
        <!-- <router-link to="/goevent" class="balloon"><img src="@/assets/svg/balloon.svg" alt=""></router-link> -->
        <button class="asidebtn" @click="scrollToTop">TOP</button>
        <!-- <router-link to="/liked" class="asidebtn favorit">찜</router-link> -->
    </div>
</template>


<script setup>
// 🔧 추가됨: 스크롤 함수 정의
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>


<style scoped>
.aside {
    position: fixed;
    bottom: 59px;
    right: 142px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 9999; /* Swiper보다 높게! */
}

/* 이벤트 풍선 */
.aside .balloon {
    display: flex;
    justify-content: center;
}
.aside .balloon img {
    object-fit: cover;
    height: 70px;
    transition: 0.2s;
}
.aside .balloon img:hover {
    transition: 0.2s;
    scale: 1.1;
}

/* TOP 버튼 */
.aside button {
    width: 55px;
    height: 55px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    color: #998888;
    font-size: 15px;
    font-weight: bold; 
}
.aside button::before {
    content: "";
    display: block;
    width: 20px;
    height: 12px;
    background-image: url('@/assets/svg/arrow_up.svg');
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 4px;
    margin-top: 3px;   
}

/* .aside button:hover {
    background-color: #dbdbdb;
    transition: 0.2s;
} */

/* 좋아요 버튼 */
.aside .favorit {
    font-size: 0;
}
.aside .favorit::before {
    content: "";
    display: block;
    width: 32px;
    height: 32px;
    background-image: url('@/assets/svg/favorite.svg');
    background-repeat: no-repeat;
    background-size: contain;
}
/* .aside .favorit:hover {
    background-color: #dbdbdb;
    transition: 0.2s;
} */
</style>