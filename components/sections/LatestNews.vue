<script setup lang="ts">
// import RecordCard from '~/components/RecordCard'
const { data: articles } = useAsyncData("articles", () =>
    queryContent('news').sort( {createdAt: 1}).limit(6).find());
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
        {{ articles }}
      </div>
    </div>
  </section>
</template>
<!--
<static-query>
  query {
    records: allNews(limit:6, sortBy:"createdAt") {
      edges {
        node { // TODO not support only picking these 5 attributes because pick option of useAsyncData is not suitable for array response.
          title
          path
          excerpt
          createdAt(format:"Do MMMM YYYY")
          timeToRead
        }
      }
    }
  }
</static-query>
-->

