<template>
  <div class="card" :class="{ flipped, disabled }" @click="flipCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="./card-front.jpg" alt="카드 앞면" />
      </div>
      <div class="card-back">
        <span>{{ prize }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  prize: String,
  disabled: Boolean,
})

const emit = defineEmits(['flipped'])

const flipped = ref(false)

const flipCard = () => {
  if (flipped.value || props.disabled) return
  flipped.value = true
  emit('flipped')
}
</script>

<style scoped>
.card {
  width: 160px;
  height: 220px;
  perspective: 1000px;
  cursor: pointer;
}

.card.disabled {
  pointer-events: none;
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

.card-front {
  background-color: #f2f2f2;
}

.card-back {
  background-color: #ffe600;
  transform: rotateY(180deg);
  font-weight: bold;
}
</style>
