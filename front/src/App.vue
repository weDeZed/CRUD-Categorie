<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Administration des catégories</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="mt-5">
        <CategoryCrud />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CategoryCrud from './components/CategoryCrud.vue';

export default {
  name: 'App',
  components: {
    CategoryCrud
  }
};
</script>

<style>
</style>
