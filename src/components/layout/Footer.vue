<!-- Footer-->
<template>
    <footer>
        <div class="infor wrap flex charcoal">
            <h1 class="h1">Pupi</h1>
            <p class="m">회사명: 푸피코리아(주) ｜대표자: 홍지원 ｜사업자등록번호: 123-45-5678 <br>주소: 서울특별시 영등포구 개나리로 49길 30, 5층 704호 (PUPI영등포타워)</p>
            <span class="block m">COPYRIGHT ⓒ ㈜푸피 ALL RIGHTS RESERVED</span>
            <ul class="flex charcoal menu">
                <li>
                    <router-link to="">회사소개</router-link>
                </li>
                <li>
                    <router-link to="">이용약관</router-link>
                </li>
                <li>
                    <router-link to="">개인정보처리방침</router-link>
                </li>
            </ul>
            <div class="call flex charcoal">
                <h2 class="menu"><strong>문의 전화</strong></h2>
                <p>1577-0000</p>
                <p class="m"><strong>상담시간: 평일 9:00~17:00</strong>｜점심시간: 12:00~13:00 <br>토 / 일 / 공휴일 휴무</p>
            </div>
        </div>
    </footer>
</template>


<style scoped>
footer {
    background-color: #FFD6D6;
    height: 370px;
    display: flex;
    align-items: center;
}
footer .infor {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto;
}
footer .infor h1 {
    grid-column: 1;
    grid-row: 2;
    align-self: end;
    color: #E07C86;
}
footer .infor > p {
    grid-column: 1;
    grid-row: 3;
    align-self: end;
    letter-spacing: 0.2px;
}
footer .infor span {
    grid-column: 1;
    grid-row: 4;
    align-self: end;
    letter-spacing: 0.2px;
}
footer .infor ul {
    grid-column: 1;
    grid-row: 1;
    gap: 30px;
}
footer .infor ul li {

}
footer .infor ul li a {
    color: #3A3A3A !important;
}
footer .call {
    grid-column: 2;
    grid-row: 1 / span 4;
    justify-self: end;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFDFD;
    border-radius: 15px;
    padding: 47px 50px;
    letter-spacing: 0.4px;
}
footer .call h2 {

}
footer .call p:nth-of-type(1) {
    font-size: 37px;
    font-weight: bold;
    color: #E07C86;
    margin-bottom: 30px;
}
footer .call p:nth-of-type(2) {

}


</style>