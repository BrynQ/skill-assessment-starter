<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')

function login() {
  authStore.login(username.value, password.value)
  router.replace('/')
}
</script>

<template>
  <h1 class="text-xl font-bold mb-3">Login</h1>
  <form class="space-y-3 flex flex-col max-w-80" @submit.prevent="login">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" v-model="username" />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" v-model="password" />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mt-3 rounded"
      type="submit"
    >
      Login
    </button>
  </form>
</template>

<style>
label {
  @apply block font-semibold;
}
input {
  @apply block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500;
}
</style>
