<!-- BRAND소개 섹션 -->
<template>
    <section id="Brnad" class="section">
        <div class="section2 wrap flex">
            <h2 class="h2">Brand</h2>
            <!-- <p>Pupi는 유아용 인형을 전문적으로 제작하고 있으며, <br>아기들의 첫 친구가 되어줄 수 있는 따뜻하고 안전한 인형을 만듭니다. <br>
                자연에서 영감을 받은 베이비 애니멀, 일상 속 귀여움을 담은 베이비 푸드, 감성을 더해주는 아트 프린트까지— <br>
                아이들의 상상력과 감성을 키워주는 제품들을 하나하나 정성스럽게 만들고 있어요. <br>
                아이와 부모 모두가 믿고 사용할 수 있도록, 부드러운 촉감, 안전한 소재, 감성적인 디자인을 최우선으로 생각합니다. <br>
                Pupi는 아이의 일상 속에 따뜻한 순간을 선물하고 싶습니다.</p> -->
            <p class="p" >내 아이가 처음 만나는 인형, 그래서 더 신중하게 고른 Pupi. <br>촉감 하나, 색감 하나도 부드럽고 안전하게. 마음 놓고 안길 수 있게. <br>
                아기에게 첫 친구가 되어줄 따뜻한 인형을, 엄마의 마음으로 담았어요.</p>
            <img src="@/assets/img/brand.png" alt="섹션 이미지">
            <a href="" class="btn">브랜드 소개 더보기</a>
        </div>   
    </section>
  
</template>

<style scoped>
section {

}
.section2 {
    width: 100vw;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr 1fr;
    column-gap: 80px;
}
.section2 h2 {
    grid-column: 1;
    grid-row: 1;
}
.section2 p {
    grid-column: 2;
    grid-row: 2;
    align-self: end;
    margin-bottom: 23px;
}
.section2 img {
    grid-column: 1;
    grid-row: 2 / span 3;
    width: 590px;
    height: 400px;
    object-fit: cover;
}
.section2 a {
    grid-column: 2;
    grid-row: 3;
}
</style>