<template>
  <div>
    <v-layout row wrap style="min-height: 80vh;">
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="transparent" flat dark>
          <img src="img/logo.svg" type="image/svg+xml" class="image-center"/>
          <v-card-title>
            <div style="margin: 0 auto;">
              <div class="main-header">
                Let's find a Home for Now
              </div>
              <div
                class="headline"
                style="text-align: center;"
              >
                Youth accommodation options in Perth, Australia
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <search/>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Search from '@/components/Landing/Search.vue';

export default {
  components: {
    Search,
  },
};
</script>

<style scoped>
  .image-center {
    margin: 0 auto;
    height: calc(100px + 10vmin);
    display: block;
  }

  .main-header {
    font-family: 'K2D', sans-serif !important;
    text-align: center;
    font-size: calc(40px + 4vmin);
    letter-spacing: -0.02em !important;
    line-height: 1.35 !important;
  }
</style>
