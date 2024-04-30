import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)

  function login(username: string, password: string) {
    isLoggedIn.value = true
  }

  function logout() {
    isLoggedIn.value = false
  }

  return { isLoggedIn, login, logout }
})
