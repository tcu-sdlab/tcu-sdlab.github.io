<script lang="ts" setup>
import HeaderPartial from '~/layouts/partials/Header.vue'
import FooterPartial from '~/layouts/partials/Footer.vue'
import ResponsiveMenuPartial from '~/layouts/partials/ResponsiveMenu.vue'
import { Ref } from "vue";

const showResponsiveMenu: Ref<boolean> = ref(false)

function openResponsiveMenu () {
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
