<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  title: string
  description: string
  icon: string
  color: string
}

defineProps<Props>()
</script>

<template>
  <div class="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
    <div class="space-y-4">
      <div class="flex items-center space-x-3">
        <Icon
          :icon="icon"
          class="h-6 w-6"
          :class="[color]"
          width="24"
          height="24"
        />
        <h3 class="text-lg font-medium text-gray-900 dark:text-white">
          {{ title }}
        </h3>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>
