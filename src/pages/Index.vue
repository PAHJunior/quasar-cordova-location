<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-xs">
      <q-card class="col-12">
        <GoogleMapLoader />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import GoogleMapLoader from 'components/GoogleMapLoader.vue'

export default {
  name: 'PageIndex',
  components: { GoogleMapLoader }
}
</script>
