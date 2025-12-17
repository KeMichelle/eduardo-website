<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section id="hero">
      <HeroSection />
    </section>

    <!-- Wellness Section -->
    <section id="wellness">
      <WellnessSection />
    </section>

    <!-- Product Gallery -->
    <section id="gallery">
      <GallerySection />
    </section>

    <!-- About Eduardo -->
    <section id="about">
      <AboutEduardo />
    </section>

    <!-- Call to Action -->
    <section id="cta">
      <CTASection />
    </section>
  </div>
</template>

<script setup lang="ts">
// Meta data for the home page
useHead({
  title:
    'EDUP GlobalFlex - Authorised Nipponflex Distributor UK | Eduardo Penafiel',
  meta: [
    {
      name: 'description',
      content:
        "Eduardo Penafiel's authorised Nipponflex distribution business in the UK. Authentic Nipponflex wellness technologies featuring FIR Bioceramic®, MFP Magnetic FIR Power® and Rabatan® advanced therapy solutions.",
    },
    {
      property: 'og:title',
      content: 'EDUP GlobalFlex - Authorised Nipponflex Distributor UK',
    },
    {
      property: 'og:description',
      content:
        'Eduardo Penafiel brings you authentic Nipponflex wellness products in the UK. Authorised distributor of genuine Nipponflex technologies.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'keywords',
      content:
        'wellness, FIR Bioceramic, Rabatan, ion therapy, magnetic therapy, wellness products, personalised wellbeing, health technology',
    },
  ],
});
</script>

<style scoped>
/* Basic container styling */
.min-h-screen {
  min-height: 100vh;
}
</style>
