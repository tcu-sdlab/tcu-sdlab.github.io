<script setup lang="ts">
const { data: articles } = useAsyncData("articles", () => queryContent('news').sort({createdAt: -1}).find())
</script>
<template>
  <NuxtLayout>
    <PageHeader>
      <template v-slot:image>
        <img src="~/assets/images/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          News
        </p>
        <p class="text-lg md:text-2xl">
            藤原研の活動履歴
          <!-- We have currently {{ $page.records.totalCount }} entries in our list -->
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div class="flex flex-wrap -m-4">
            <RecordCard
                v-for="article in articles"
                :key="article._path"
                :record="article" />
        </div>
      </section>
      <!--
      <div
          v-if="$page.records.pageInfo.totalPages > 1"
          class="mt-12 flex justify-center">
        <Pagination
            base-url="/news"
            :current-page="$page.records.pageInfo.currentPage"
            :total-pages="$page.records.pageInfo.totalPages" />
      </div>
      -->
    </div>
  </NuxtLayout>
</template>

<!--
<page-query>
query ($page: Int) {
  records: allNews(sortBy:"createdAt", order:DESC, perPage: 9, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        path
        excerpt
        createdAt(format:"Do MMMM YYYY")
        timeToRead
      }
    }
  }
}
</page-query>
<script>
import Pagination from '~/components/Pagination'

export default {
  metaInfo: {
    title: 'Browse News'
  },
  components: {
    Pagination,
  }
};
</script>
-->
