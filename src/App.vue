<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <img alt="Vue logo" class="h-8 w-8" src="@/assets/logo.svg">
          </div>
          <nav class="flex space-x-4">
            <RouterLink 
              to="/" 
              class="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              :class="{ 'text-emerald-600': $route.path === '/' }"
            >
              Home
            </RouterLink>
            <RouterLink 
              to="/about"
              class="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              :class="{ 'text-emerald-600': $route.path === '/about' }"
            >
              About
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
