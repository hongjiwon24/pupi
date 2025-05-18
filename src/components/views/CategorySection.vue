<template>
  <div class="Category flex">
    <ul class="wrap flex">
            <li>
                <router-link to="/event">
                <img src="@/assets/img/elpnt_bg.png" alt="제품">
                </router-link>
                <p>Product</p>
            </li>
            <li>
                <router-link to="/event">
                <img src="@/assets/img/cat_w_bg.png" alt="베이비 애니멀">
                </router-link>
                <p>Baby Anima</p>
            </li>
            <li>
                <router-link to="/event">
                <img src="@/assets/img/dog_w_bg.png" alt="베이비 푸드">
                </router-link>
                <p>Baby Food</p>
            </li>
            <li>
                <router-link to="/event">
                <img src="@/assets/img/bear_bg.png" alt="베이비 푸드">
                </router-link>
                <p>Brand</p>
            </li>
            <!-- <li>
                <router-link to="/event">
                <img src="@/assets/img/bear_bg.png" alt="아트 프린트">
                </router-link>
                <p>Art Print</p>
            </li> -->
    </ul>
  </div>
</template>

<style scoped>
.Category {
    background-color: #FFD6D6;
    margin: 70px 0;
}
.Category ul {
    padding: 47px 0;
    gap: 48px;
    border-radius: 50px;
    justify-content: center;
}
.Category ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}
.Category ul li img {
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 50%;
}
.Category ul li  p {
    font-weight: 690;
}

/* 흰색 박스 */
/* .Category ul {
    padding: 47px 170px;
    gap: 57px;
    background-color: white;
    border-radius: 50px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}
.Category ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}
.Category ul li img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
} */

</style>