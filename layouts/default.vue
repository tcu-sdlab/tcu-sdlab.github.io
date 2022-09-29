<script lang="ts" setup>
import HeaderPartial from '~/layouts/partials/Header'
import FooterPartial from '~/layouts/partials/Footer'
import ResponsiveMenuPartial from '~/layouts/partials/ResponsiveMenu.vue'

const showResponsiveMenu = ref(false)

function openResponsiveMenu () {
  console.log("hogehoge")
  showResponsiveMenu.value = true;
}

function closeResponsiveMenu () {
  showResponsiveMenu.value = false;
}
</script>

<template>
  <div class="layout">
    <ResponsiveMenuPartial :show-responsive-menu="showResponsiveMenu" @closeResponsiveMenu="closeResponsiveMenu" />
    <HeaderPartial @open-responsive-menu="openResponsiveMenu" />
    <div class="min-h-screen">
      <slot />
    </div>
    <FooterPartial />
  </div>
</template>
