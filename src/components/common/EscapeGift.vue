<!-- // 실제 경품 컴포넌트 -->

<template>
  <div class="gift-container">
    <div
      class="gift"
      :style="{
        top: giftPosition.top + 'px',
        left: giftPosition.left + 'px'
      }"
      @click.stop="claimPrize"
    >
      🎁
    </div>
    <div class="message" v-if="claimed">
      🎉 축하합니다! 경품을 잡으셨습니다! 경품은: {{ prize.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 경품 목록 (당첨 될 확률 1개)
const prizes = [
  { id: 1, name: '스타벅스 기프티콘', sound: 'starbucks.mp3' },
  { id: 2, name: '문화상품권', sound: 'voucher.mp3' },
  { id: 3, name: '아이폰 케이스', sound: 'iphone_case.mp3' },
  { id: 4, name: '배달의 민족 5000원', sound: 'delivery_coupon.mp3' },
  { id: 5, name: '게임 아이템', sound: 'game_item.mp3' },
]

const giftPosition = ref({ top: 100, left: 100 })
const claimed = ref(false)
const prize = ref(null) // 선택된 경품
let intervalId = null

// 경품을 랜덤으로 이동시킬 함수
function getRandomPosition() {
  const padding = 80
  const maxWidth = window.innerWidth - padding
  const maxHeight = window.innerHeight - padding
  return {
    top: Math.floor(Math.random() * maxHeight),
    left: Math.floor(Math.random() * maxWidth),
  }
}

// 경품 이동 함수
function moveGift() {
  if (!claimed.value) {
    giftPosition.value = getRandomPosition()
  }
}

// 경품을 잡은 후 처리하는 함수
function claimPrize() {
  if (claimed.value) return
  claimed.value = true
  prize.value = selectRandomPrize()
  playSound(prize.value.sound)
  clearInterval(intervalId) // 경품 이동 멈춤
}

// 경품을 랜덤으로 선택하는 함수
function selectRandomPrize() {
  const randomIndex = Math.floor(Math.random() * prizes.length)
  return prizes[randomIndex]
}

// 사운드 효과 함수
function playSound(soundFile) {
  const audio = new Audio(`/sounds/${soundFile}`)
  audio.play()
}

onMounted(() => {
  intervalId = setInterval(moveGift, 1000) // 경품이 1초마다 이동
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.gift-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fdfcf9;
  overflow: hidden;
}

.gift {
  position: absolute;
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.4s ease;
  user-select: none;
}

.message {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: #2ecc71;
  font-weight: bold;
}
</style>
