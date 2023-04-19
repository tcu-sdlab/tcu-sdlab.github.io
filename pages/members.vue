<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <PageHeader>
      <template v-slot:image>
          <img src="~/assets/images/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.jpg">
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          Members
        </p>
        <p
          class="text-lg md:text-2xl">
          藤原研の構成員
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
          <h1>博士前期課程学生</h1>
          <ul class="list-disc">
              <li>2023年度配属学生: 1名</li>
          </ul>
          <h1>学部生（3年次に配属）</h1>
          <ul class="list-disc">
              <li>2023年度配属学生: 13名</li>
              <li>2022年度配属学生: 9名</li>
              <li>2021年度配属学生: 14名</li>
          </ul>
      </section>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
h1 {
  @apply text-2xl;
  @apply md:text-2xl;
  margin-top: 0.3em;
  margin-bottom: 0.5em;
}

ul {
  margin-left: 3em;
}

</style>
