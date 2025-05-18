<template>
    <header class="flex">
        <span class="block"></span>
        <nav class="flex">
            <h1 class="h1"><router-link to="/">Pupi</router-link></h1>
            <ul class="flex">
                <li><router-link to="/all">All</router-link></li>
                <li><router-link to="/baby_animal">Baby Animal</router-link></li>
                <li><router-link to="/baby_Food">Baby Food</router-link></li>
                <!-- <li><router-link to="">Art Print</router-link></li> -->
                <li><router-link to="">Brand</router-link></li>
                <li><router-link to="/goevent">Event</router-link></li>
            </ul>
            <div class="nav-links">
                <router-link to="/liked" class="nav-item liked">좋아요</router-link>
                <router-link to="/liked" class="nav-item cart">장바구니</router-link>
                <router-link to="/login" class="nav-item login">로그인</router-link>
            </div>
        </nav>
            
    </header> 
</template>


<style scoped>
header {
    /* position: relative; */
    width: 100%;
    /* z-index: 2; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFF9F0;
    /* top: 0; */
}
header span {
    width: 100%;
    height: 37px;
    background-color: #FFD6D6;
}
header nav {
    width: 1440px;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
header nav h1 {
  
}
header nav h1 a {
    color: #d1707a !important;
}
header nav ul {
    gap: 45px;
}
header nav ul li {
  
}
header nav ul li a {
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 18px;
}

.nav-item {
    font-size: 0;
}

.nav-item::before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: contain;
}

.nav-item.liked::before {
    width: 31px;
    height: 31px;
    background-image: url('@/assets/svg/favorite.svg');
    transform: translateY(-2px);
}
.nav-item.cart::before {
    width: 26px;
    height: 26px;
    background-image: url('@/assets/svg/shopping_cart.svg');
}
.nav-item.login::before {
    background-image: url('@/assets/svg/person.svg');
}
</style>