<!-- Best Product 섹션 -->
<template>
    <section id="Best Product" class="section">
        <div class="section3 wrap flex">
            <h2 class="h2">Best Product</h2>
            <div class="product_d wrap flex">
                <ul class="flex">
                    <router-link to="/event">
                        <li>
                            <img src="@/assets/img/elpnt.png" alt="">
                            <p>Baby Elephant<strong><br>20,000원</strong></p>
                        </li>
                    </router-link>
                    <router-link to="/event">
                        <li>
                            <img src="@/assets/img/cat_w.png" alt="">
                            <p>Baby Cat<br><strong>20,000원</strong></p>
                        </li>
                    </router-link>
                    <router-link to="/event">
                        <li>
                            <img src="@/assets/img/peach.png" alt="">
                            <p>Baby Bear<br><strong>20,000원</strong></p>
                        </li>
                    </router-link>
                    <router-link to="/event">
                        <li>
                            <img src="@/assets/img/st_milk.png" alt="">
                            <p>Baby Bear<br><strong>20,000원</strong></p>
                        </li>
                    </router-link>
                    <router-link to="/event">
                        <li>
                            <img src="@/assets/img/potato.png" alt="">
                            <p>Baby Elephant<br><strong>20,000원</strong></p>
                        </li>
                    </router-link>
                </ul>
            </div>
        </div>
    </section>
</template>


<style scoped>
section {
    /* height: 100%; */
}
.section3 {
    display: flex;
    flex-direction: column;
    /* background-color: #ccc; */
}
.section3 h2 {
    margin-bottom: 24px;
}

.product_d {
    justify-content: center;
}
.product_d ul {
    width: 1440px;
    display: flex;
    justify-content: space-between;
}
.product_d ul li {

}
.product_d ul li img {
    width: 218px;
    height: 218px;
    object-fit: cover;
    border: 1px solid #a0a0a0;
}
.product_d ul li p {
    color: #5e5e5e;
}
</style>