<!-- More_btn.vue -->
<template>
  <button class="more-btn" @click="$emit('click')" v-if="show">
    더보기 +
  </button>
</template>

<script setup>
defineProps({
  show: Boolean // 버튼을 보여줄지 말지
})
defineEmits(['click']) // 클릭 이벤트 부모에게 전달
</script>

<style scoped>
.more-btn {
  margin-top: 30px;
  padding: 10px 30px;
  font-size: 16px;
  border: none;
  background-color: #f48e8e;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.more-btn:hover {
  background-color: #e06666;
}
</style>
