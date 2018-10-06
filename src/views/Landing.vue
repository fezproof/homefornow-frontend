<template>
  <div>
    <toolbar/>
    <v-content>
      <router-view/>
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

