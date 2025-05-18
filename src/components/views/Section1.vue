<!-- BABY ANIMAL 섹션 -->
<template>
    <section id="Baby Animal" class="section">
        <div class="section1 wrap flex">
            <h2 class="h2">Baby Animal</h2>
            <img src="@/assets/img/b_animal.png" alt="섹션 이미지">
            <p class="p">베이비 애니멀과의 교감을 통해 우리 아이가 <br> 동물 친구들과 편안한 애착을 가질 수 있도록 해주세요. <br> 베이비 애니멀은 알러지 케어가 되는 순면 100%로 만들어졌습니다.</p>
            <!-- <p class="p">우리 아이의 첫 친구, 베이비 애니멀. <br>동물 친구들과의 교감을 통해 편안한 애착을 형성해요. <br>알러지 걱정 없는 100% 순면 소재로 만들어져 더욱 안심할 수 있어요.</p> -->
            <a href="" class="btn">베이비 애니멀 더보기</a>
            <ul class="flex">
                <li>
                    <router-link to="/event"><img src="@/assets/img/elpnt.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/event"><img src="@/assets/img/cat_w.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/event"><img src="@/assets/img/dog_w.png" alt=""></router-link>
                </li>
            </ul>
        </div>
    </section>
</template>


<style scoped>
.section1 {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr 1fr auto;
    width: 100vw;
}
.section1 h2 {
    grid-column: 1 / span 2;
    grid-row: 1;
}
.section1 > img {
    grid-column: 1;
    grid-row: 2 / span 4;
    width: 590px;
    height: 400px;
    object-fit: cover;
}
.section1 > p {
    grid-column: 2;
    grid-row: 2;
    align-self: end;
}
.section1 a {
    grid-column: 2;
    grid-row: 3;
    margin-top: 18px;
}
.section1 ul {
    grid-column: 2;
    grid-row: 4;
    display: flex;
    /* justify-content: space-between; */
    gap: 20px;
}
.section1 ul li {
    position: relative;
    width: 155px;
    height: 155px;
    overflow: hidden;
    border: 1px solid #ccc;
}
.section1 ul li img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

/* 어두운 필터 오버레이 */
.section1 ul li::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  background-image: url(@/assets/svg/add_circle.svg);
  background-repeat: no-repeat;
  background-size: 40px 40px;
  background-position: center;
}

/* 마우스 오버 시 효과 */
.section1 ul li:hover {
    border: 1px solid #a1a1a1;
}
.section1 ul li:hover::after {
  opacity: 1;
}
.section1 ul li:hover img {
  transform: scale(1.05);
}

</style>