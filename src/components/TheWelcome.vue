<script setup lang="ts">
interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Documentation",
    description: "Vue's official documentation provides you with all information you need to get started."
  },
  {
    title: "Tooling",
    description: "This project is served and bundled with Vite. The recommended IDE setup is VSCode + Volar."
  },
  {
    title: "Ecosystem",
    description: "Get official tools and libraries for your project: Pinia, Vue Router, Vue Test Utils, and Vue Dev Tools."
  },
  {
    title: "Community",
    description: "Got stuck? Ask your question on Vue Land, our official Discord server, or StackOverflow."
  }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to Your Vue.js App
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Start building your next great project with Vue 3 and TypeScript
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="mt-16">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div v-for="feature in features" :key="feature.title"
            class="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="space-y-4">
              <h3 class="text-lg font-medium text-gray-900">
                {{ feature.title }}
              </h3>
              <p class="text-base text-gray-500">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <a href="https://vuejs.org" target="_blank" rel="noopener"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
          Get Started
        </a>
      </div>
    </div>
  </div>
</template> 