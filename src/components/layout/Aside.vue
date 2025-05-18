<template>
    <div class="aside flex">
        <router-link to="/goevent" class="balloon"><img src="@/assets/svg/balloon.svg" alt=""></router-link>
        <button class="asidebtn" @click="scrollToTop">TOP</button>
        <router-link to="/liked" class="asidebtn favorit">찜</router-link>
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
}

/* 이벤트 풍선 */
.aside .balloon {
    display: flex;
    justify-content: center;
}
.aside .balloon img {
    object-fit: cover;
    height: 70px;
}

/* TOP 버튼 */
.aside button {
    width: 55px;
    height: 55px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    color: #A7A7A7;
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
</style>