<template>
  <base-header>
    <div slot="links">
      <nuxt-link v-for="link of links" :key="link.text" :href="link.href">
        <button type="button">
          {{ link.text }}
        </button>
      </nuxt-link>
    </div>
  </base-header>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style lang="scss" scoped>
.app-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
}
</style>
