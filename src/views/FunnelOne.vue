<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-6">
    <h1 class="text-3xl font-bold text-gray-500 mb-2">Choose Your Gender</h1>
    <p class="text-gray-600 mb-10">Help us personalize your keto journey</p>

    <div class="flex space-x-8">
      <!-- Male -->
      <div class="w-48 h-56 bg-white rounded-xl border border-green-200 shadow hover:shadow-lg flex flex-col items-center justify-center cursor-pointer transition">
        <div class="w-16 h-16 bg-orange-100 rounded-full mb-6"></div>
        <p class="text-gray-800 font-medium">Male</p>
      </div>

      <!-- Female -->
      <div class="w-48 h-56 bg-white rounded-xl border border-green-200 shadow hover:shadow-lg flex flex-col items-center justify-center cursor-pointer transition">
        <div class="w-16 h-16 bg-orange-100 rounded-full mb-6"></div>
        <p class="text-gray-800 font-medium">Female</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Nothing needed here yet
</script>
