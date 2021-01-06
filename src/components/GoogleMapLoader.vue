<template>
  <div id="map" ref="map">
    <MapMarker :lat="coords.lat" :lng="coords.lng"></MapMarker>
  </div>
</template>

<style>
</style>

<script>
import MapMarker from './MapMarker.vue'

export default {
  name: 'GoogleMapLoader',
  components: { MapMarker },
  data () {
    return {
      map: null,
      coords: {
        lat: -25.344,
        lng: 131.036
      }
    }
  },
  mounted () {
    this.getLocation()
  },
  methods: {
    setLocation (suc) {
      const { latitude, longitude } = suc.coords
      this.coords = {
        lat: latitude,
        lng: longitude
      }

      this.startMap()
    },
    getLocation () {
      if (this.$q.platform.is.cordova) {
        this.$q.loading.show()
        this.$getGeolocation()
          .then((suc) => {
            this.setLocation(suc)
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            this.$q.loading.hide()
          })
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setLocation)
      } else {
        this.$q.notify({
          position: 'top',
          timeout: 2500,
          color: 'negative',
          textColor: 'white',
          actions: [{ icon: 'close', color: 'white' }],
          message: 'Não foi possível obter a localização.'
        })
      }
    },
    startMap () {
      this.map = new window.google.maps.Map(this.$refs.map, {
        center: this.coords,
        zoom: 15
      })
    },
    getMap (callback) {
      const vm = this
      function checkForMap () {
        if (vm.map) callback(vm.map)
        else setTimeout(checkForMap, 200)
      }
      checkForMap()
    }
  }
}
</script>

<style scoped>
  #map {
    height: 750px;
    background: gray;
  }
</style>
