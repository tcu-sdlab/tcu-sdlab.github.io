<template>
  <NuxtLayout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          News
        </p>
        <p
            class="text-lg md:text-2xl">
          <!-- We have currently {{ $page.records.totalCount }} entries in our list -->
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div class="flex flex-wrap -m-4">
          <!--
          <RecordCard
              v-for="edge in $page.records.edges"
              :key="edge.node.id"
              :record="edge.node" />
             -->
        </div>
        開発中
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
import PageHeader from '~/components/PageHeader'
import RecordCard from '~/components/RecordCard'
import Pagination from '~/components/Pagination'

export default {
  metaInfo: {
    title: 'Browse News'
  },
  components: {
    PageHeader,
    Pagination,
    RecordCard
  }
};
</script>
-->
