<script setup lang="ts">
// import RecordCard from '~/components/RecordCard'
const { data: articles } = useAsyncData("articles", () =>
    queryContent('credits').find());
</script>

<template>
    <NuxtLayout>
        <PageHeader>
            <template v-slot:image>
                <img src="~/assets/images/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.jpg">
            </template>
            <template v-slot:content>
                <p class="text-4xl md:text-6xl">
                    Thank you
                </p>
                <p
                    class="text-lg md:text-2xl">
                    Without these awesome guys, we were note able to create our site!
                </p>
            </template>
        </PageHeader>
        <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-wrap -m-4">
                <RecordCard
                    v-for="article in articles"
                    :key="article._path"
                    :record="article">
                    <template v-slot:link>
                        <NuxtLink
                            :to="article.link"
                            class="text-smalt-blue-500 hover:text-black inline-flex items-center">
                            Visit website
                            <svg
                                class="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </NuxtLink>
                    </template>
                </RecordCard>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
</script>
