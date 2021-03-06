import { Notify } from 'quasar'
export default async ({ Vue }) => {
  Vue.prototype.$getGeolocation = () => {
    return new Promise((resolve, reject) => {
      cordova.plugins.diagnostic.requestLocationAuthorization(function (status) {
        console.log('entrou no diagnostico', status)
        console.log('Nao sei', cordova.plugins.diagnostic.permissionStatus)
        if ((status === cordova.plugins.diagnostic.permissionStatus.GRANTED) || (status === cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE)) {
          window.navigator.geolocation.getCurrentPosition(
            resolve,
            reject
          )
        } else if (status === cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE) {
          Notify.create({
            position: 'top',
            timeout: 2500,
            color: 'negative',
            textColor: 'white',
            actions: [{ icon: 'close', color: 'white' }],
            message: 'Não foi possível obter a localização.'
          })
        }
      },
      function (error) {
        console.log(error)
        Notify.create({
          position: 'top',
          timeout: 2500,
          color: 'negative',
          textColor: 'white',
          actions: [{ icon: 'close', color: 'white' }],
          message: 'Não foi possível obter a localização.'
        })
      },
      cordova.plugins.diagnostic.locationAuthorizationMode.ALWAYS)
    })
  }
}
