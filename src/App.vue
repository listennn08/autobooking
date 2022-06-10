<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { ipcRenderer } from 'electron'

onMounted(() => {
  ipcRenderer.sendSync('test', 'value')
})

const today = new Date()
const year = ref(today.getFullYear())
const month = ref(today.getMonth() + 1)
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex mb-2 -mx-2">
      <div class="relative flex items-center mx-2">
        <label class="block mr-1 flex-1 whitespace-nowrap text-sm font-medium text-gray-500" for="year"> 預約年 </label>
        <input class="w-full p-3 text-sm border-2 border-gray-200 rounded" id="year" v-model="year" />
      </div>
      <div class="relative flex items-center mx-2">
        <label class="block mr-1 flex-1 whitespace-nowrap text-sm font-medium text-gray-500" for="month"> 預約月 </label>
        <input class="w-full p-3 text-sm border-2 border-gray-200 rounded" id="month" v-model="month" />
      </div>
    </div>
    <div class="flex mb-2 -mx-2">
      <div class="relative flex items-center mx-2">
        <label class="block mr-1 flex-1 whitespace-nowrap text-sm font-medium text-gray-500" for="year"> 預約年 </label>
        <input class="w-full p-3 text-sm border-2 border-gray-200 rounded" id="year" v-model="year" />
      </div>
      <div class="relative flex items-center mx-2">
        <label class="block mr-1 flex-1 whitespace-nowrap text-sm font-medium text-gray-500" for="month"> 預約月 </label>
        <input class="w-full p-3 text-sm border-2 border-gray-200 rounded" id="month" v-model="month" />
      </div>
    </div>
    <div class="flex mb-2 -mx-2">
      <div class="relative flex items-center mx-2">
        <label class="block mr-1 flex-1 whitespace-nowrap text-sm font-medium text-gray-500" for="year"> 預約年 </label>
        <input class="w-full p-3 text-sm border-2 border-gray-200 rounded" id="year" v-model="year" />
      </div>
      <div class="relative flex items-center mx-2">
        <label class="block mr-1 flex-1 whitespace-nowrap text-sm font-medium text-gray-500" for="month"> 預約月 </label>
        <input class="w-full p-3 text-sm border-2 border-gray-200 rounded" id="month" v-model="month" />
      </div>
    </div>

    <button class="inline-block px-12 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:(bg-indigo-600 text-white) active:(bg-indigo-500) focus:(outline-none ring)">
      預約
    </button>
  </main>
</template>

