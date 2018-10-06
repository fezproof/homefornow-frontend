<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-toolbar flat height="75"
      :color="focus ? 'white' : 'transparent'"
      :dark="!focus"
    >
      <v-btn
        icon
        @click="geolocation"
      >
        <v-icon>my_location</v-icon>
      </v-btn>
      <v-input
        single-line
        :error-messages="errors"
        hide-details
      >
        <gmap-autocomplete
          v-model="location"
          @place_changed="setPlace"
          :options="mapOptions"
          @focus.native="focus = true"
          @blur.native="focus = false"
          style="height: 100%; width: 100%"
        />
      </v-input>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
  </v-flex>
</template>

<script>

export default {
  data() {
    return {
      request: {
        lat: '',
        long: '',
      },
      errors: [],
      location: '',
      focus: false,
      mapOptions: {
        types: ['(cities)'],
        componentRestrictions: { country: 'au' },
      },
    };
  },
  methods: {
    async geolocation() {
      const oldLocValue = this.location;
      this.errors = [];
      this.location = 'Finding your location ...';
      try {
        const position = await this.getCurrentPosition();
        this.request.lat = position.coords.latitude;
        this.request.long = position.coords.longitude;
        const geocode = await this.geocode((''.concat(this.request.lat, ', ', this.request.long)));
        const value = await this.getGeoVal(geocode.address_components);
        this.location = value;
      } catch (error) {
        this.errors.push(error.message ? error.message : error);
        this.location = oldLocValue;
      }
    },
    async getCurrentPosition(options) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    },
    async geocode(add) {
      /* eslint-disable-next-line */
      const geocoder = new google.maps.Geocoder();
      return new Promise((resolve, reject) => {
        geocoder.geocode({ address: add }, (results, status) => {
        /* eslint-disable-next-line */
          if (status === google.maps.GeocoderStatus.OK) {
            resolve(results[0]);
          } else {
            reject(status);
          }
        });
      });
    },
    async getGeoVal(addressComponents) {
      let locality;
      let state;
      let country;
      return new Promise((resolve, reject) => {
        addressComponents.forEach((element) => {
          if (!country && element.types[0] === 'country') {
            country = element.long_name;
          }
          if (!state && element.types[0] === 'administrative_area_level_1') {
            state = element.short_name;
          }
          if (!locality && element.types[0] === 'locality') {
            locality = element.long_name;
          }
        });
        if (country && state && locality) {
          resolve(locality.concat(' ', state, ', ', country));
        } else {
          reject(new Error('Unable to retrieve location'));
        }
      });
    },
    async setPlace(place) {
      this.request.lat = await place.geometry.location.lat();
      this.request.long = await place.geometry.location.lng();
    },
  },
};
</script>

<style>
  .pac-container {
    box-shadow: none;
    border: none;
    background: #f5f5f5;
    border-radius: 0;
  }

  .pac-icon {
    width: 0;
    background-image: none;
  }
  .pac-item {
    font-family: 'Roboto', sans-serif;
    color: #333;
    border: none;
  }

  .pac-item:hover, .pac-item-selected {
    background: #efd5f6;
  }
</style>
