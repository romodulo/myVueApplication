<script setup>
import { ref } from 'vue'
const items = ref([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  }
])

const itemsDropDown = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const valueDropDown = ref('Backlog')
</script>

<template>
    <!-- <h1 class="text-3xl font-bold underline"> -->
    <h1 class="text-9xl font-bold">
        Hello world!
    </h1>
    <UApp>
        <UContainer>
          <UAccordion :items="items" />
          <div class="w-full flex justify-center">
            <UInputMenu v-model="valueDropDown" :items="itemsDropDown" />
          </div>
        </UContainer>
    </UApp>
</template>


<style scoped>

</style>

