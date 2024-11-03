<script setup lang="ts">
import { Icon } from '@iconify/vue'
import FeatureCard from './FeatureCard.vue'

interface Feature {
  title: string
  description: string
  icon: string
  color: string
}

const mainFeatures: Feature[] = [
  {
    title: 'Vue 3.5 & TypeScript',
    description: 'Build scalable applications with Vue 3.5\'s Composition API and TypeScript 5.6\'s strong type checking.',
    icon: 'mdi:language-typescript',
    color: 'text-blue-600',
  },
  {
    title: 'Vite Powered',
    description: 'Lightning fast development with Vite 5, offering instant server start and hot module replacement.',
    icon: 'simple-icons:vite',
    color: 'text-purple-600',
  },
  {
    title: 'State Management',
    description: 'Intuitive state management with Pinia, featuring dev-tools support and TypeScript integration.',
    icon: 'mdi:database',
    color: 'text-yellow-600',
  },
  {
    title: 'Routing & Layouts',
    description: 'Vue Router with automatic route generation and flexible layout system for complex UIs.',
    icon: 'mdi:routes',
    color: 'text-green-600',
  },
]

const toolingFeatures: Feature[] = [
  {
    title: 'TailwindCSS 3',
    description: 'Utility-first CSS framework for rapid UI development with built-in responsive design.',
    icon: 'simple-icons:tailwindcss',
    color: 'text-cyan-500',
  },
  {
    title: 'Testing Suite',
    description: 'Comprehensive testing with Vitest for unit tests and Playwright for end-to-end testing.',
    icon: 'mdi:test-tube',
    color: 'text-red-500',
  },
  {
    title: 'Code Quality',
    description: 'ESLint with @antfu/eslint-config for consistent, high-quality code standards.',
    icon: 'mdi:code-tags-check',
    color: 'text-indigo-500',
  },
  {
    title: 'Developer Experience',
    description: 'Enhanced DX with Vue DevTools integration and TypeScript support.',
    icon: 'mdi:tools',
    color: 'text-gray-600',
  },
]

const stats = [
  { label: 'Development Server', value: '5173', icon: 'mdi:port' },
  { label: 'Node Version', value: '20.x+', icon: 'logos:nodejs-icon' },
  { label: 'TypeScript', value: '5.6', icon: 'logos:typescript-icon' },
  { label: 'Vue Version', value: '3.5', icon: 'logos:vue' },
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Vue.js Starter Template
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
          A modern foundation for building scalable Vue.js applications with TypeScript, Pinia, and more.
        </p>

        <!-- Quick Stats -->
        <div class="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          <div
            v-for="stat in stats" :key="stat.label"
            class="bg-white dark:bg-gray-800 px-4 py-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div class="flex items-center justify-center space-x-2">
              <Icon :icon="stat.icon" class="h-6 w-6" />
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                {{ stat.label }}
              </dt>
            </div>
            <dd class="mt-1 text-lg font-semibold text-gray-900 dark:text-white text-center">
              {{ stat.value }}
            </dd>
          </div>
        </div>
      </div>

      <!-- Core Features -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Core Features
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            v-for="feature in mainFeatures"
            :key="feature.title"
            v-bind="feature"
          />
        </div>
      </div>

      <!-- Developer Tools -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Developer Tools
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            v-for="feature in toolingFeatures"
            :key="feature.title"
            v-bind="feature"
          />
        </div>
      </div>

      <!-- Getting Started -->
      <div class="mt-16 text-center">
        <div class="inline-flex flex-col items-center space-y-4">
          <a
            href="https://github.com/your-username/your-repo-name" target="_blank" rel="noopener"
            class="inline-flex items-center space-x-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            <Icon icon="mdi:github" class="h-5 w-5" />
            <span>Use Template</span>
          </a>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Or run
            <code class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">
              npm install
            </code>
            to get started
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
