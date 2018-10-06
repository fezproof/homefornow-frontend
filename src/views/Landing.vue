<template>
  <div>
    <toolbar/>
    <v-content class="landing">
      <v-container fluid grid-list-lg>
        <router-view/>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';

export default {
  components: {
    Toolbar,
  },
};
</script>

<style scoped>
  .landing {
    background: linear-gradient(-45deg, #775FA3, #493276);
    height: 100%;
  }
</style>
