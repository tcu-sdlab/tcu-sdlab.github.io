<script setup lang="ts">
const { data: articles } = useAsyncData("articles", () =>
    queryContent('news').sort( {createdAt: -1}).limit(6).find());
</script>

<template>
  <section>
    <div class="container px-5 py-12 mx-auto">
      <div class="text-center pb-12">
        <h2 class="text-4xl">
          最新情報
        </h2>
        <h3>
          藤原研の活動
        </h3>
      </div>
      <div class="flex flex-wrap -m-4">
        <RecordCard
            v-for="article in articles"
            :key="article._path"
            :record="article" />
      </div>
    </div>
  </section>
</template>
