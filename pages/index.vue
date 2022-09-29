<template>
  <NuxtLayout>
    <PageHeader>
      <template v-slot:image>
        <img src="~/assets/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg">
      </template>

      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          藤原研究室
        </p>
        <p class="text-lg md:text-2xl">
          Laboratory for Software Developers (SDLab)
        </p>
      </template>
    </PageHeader>

    <SectionsIntroduction />


    <div class="container text-center mx-auto">
      <SectionsLatestNews />
    </div>

    <!--
    <SectionContribute />
    -->

  </NuxtLayout>
</template>
