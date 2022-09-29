<script setup lang="ts">
const { data: article } = useAsyncData("article", () => queryContent(useRoute().path).findOne())
</script>
<template>
  <NuxtLayout>
    <PageHeader>
      <template v-slot:content>
        <h1 class="text-4xl lg:text-6xl">
          {{ article.title }}
        </h1>
      </template>
      <!-- TODO add image support but current Nuxt3 cause error when use v-if in template
      see: https://github.com/vuejs/core/issues/6651
      <template
          v-if="article.image !== null"
          v-slot:image>
          <img src="~/assets/images/{{article.image}}">
      </template>
      -->
    </PageHeader>

    <div class="container text-left mx-auto">
      <div class="flex flex-wrap lg:flex-row-reverse py-12">
        <div class="w-full lg:w-1/4 px-5">
          <!--          <PageSidebar :record="$page.entry" />-->
        </div>

        <div class="w-full lg:w-3/4 px-5 prose lg:prose-xl max-w-none">
          <!--          <div-->
          <!--              class="content"-->
          <!--              v-html="$page.entry.content" />-->
          <ContentDoc class="content" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
