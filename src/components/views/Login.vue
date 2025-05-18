<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">WELCOME</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <!-- <label for="username">아이디</label> -->
          <input
            v-model="username"
            id="username"
            type="text"
            required
          />
        </div>

        <div class="form-group">
          <!-- <label for="password">비밀번호</label> -->
          <input
            v-model="password"
            id="password"
            type="password"
            required
          />
        </div>

        <button type="submit" class="login-button">로그인</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('아이디:', username.value)
  console.log('비밀번호:', password.value)

  // 로그인 로직 또는 API 연동 작성 위치
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border 0.2s ease;
}

.form-group input:focus {
  border-color: #3b82f6;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-button:hover {
  background-color: #2563eb;
}
</style>
