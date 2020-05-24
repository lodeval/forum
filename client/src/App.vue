<template>
  <div id="app">
    <AppNav />
    <router-view />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue';

export default {
  components: {
    AppNav,
  },
};
</script>

<style lang="scss">
</style>
