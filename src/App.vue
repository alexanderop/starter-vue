<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { RouterLink, RouterView } from 'vue-router'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <img alt="Vue logo" class="h-8 w-8" src="@/assets/logo.svg">
          </div>
          <nav class="flex space-x-4">
            <RouterLink
              to="/"
              class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/' }"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/about"
              class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/about' }"
            >
              About
            </RouterLink>
            <button
              class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              @click="toggleDark()"
            >
              {{ isDark ? '🌙' : '☀️' }}
            </button>
          </nav>
        </div>
      </div>
    </header>

    <main class="dark:text-gray-100">
      <RouterView />
    </main>
  </div>
</template>
