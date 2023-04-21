<script setup lang="ts">
interface Props {
  showResponsiveMenu: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['closeResponsiveMenu'])

const close = () => {
    emit('closeResponsiveMenu')
}
</script>
<template>
  <div
    v-if="showResponsiveMenu"
    class="fixed top-0 left-0 bg-shark-600 opacity-90 w-full h-screen z-1000 overflow-hidden pt-20">
    <div class="absolute top-0 right-0 text-right text-right mr-6 mt-6 text-white">
      <a
        href="#"
        type="button"
        class="block rounded-full border border-white p-4 hover:bg-white hover:text-black transition-colors duration-150"
        @click.prevent="close">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="x w-6 h-6"><path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" /></svg>
      </a>
    </div>

    <div class="container mx-auto text-2xl text-white">
      <ul class="text-center list-none justify-center">
        <li>
          <NuxtLink
            to="/"
            class="inline-block mb-5"
            exact>
            Home
          </NuxtLink>
        </li><li>
          <NuxtLink
            to="/members"
            class="inline-block mb-5"
            exact>
            Members
          </NuxtLink>
        </li><li>
          <NuxtLink
            to="/publications"
            class="inline-block mb-5"
            exact>
            Publications
          </NuxtLink>
        </li><li>
          <NuxtLink
            to="/news"
            class="inline-block mb-5"
            exact>
            News
          </NuxtLink>
        </li><li>
          <NuxtLink
            to="/articles/access"
            class="inline-block mb-5"
            exact>
            Access
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>



<style>

</style>
