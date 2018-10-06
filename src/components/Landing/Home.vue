<template>
  <div>
    <v-layout row wrap style="height: 80vh">
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="transparent" flat dark>
          <img src="img/logo.svg" type="image/svg+xml" class="image-center"/>
          <v-card-title primary-title>
            <div>
              <div class="display-4">
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
      <v-flex xs12 sm6 offset-sm3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
};
</script>

<style scoped>
  .image-center {
    margin: 0 auto;
    height: 200px;
    display: block;
  }

  .display-4 {
    font-family: 'K2D', sans-serif !important;
    text-align: center;
  }
</style>
