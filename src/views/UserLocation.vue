<template>
  <div>
    
    <div v-if="isLoad">
        Is Loading
    </div>
    <div v-else>
        <div>Your Current Position</div>
    <div> LAT : {{ position.coords.latitude }}</div>
    <div> LONG : {{ position.coords.longitude }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLocation",  
  data : () => {
      return {
          isLoad :true,
          position : {

          }
      }
  },
 async created() {
      await this.getLocation()
      this.isLoad = false
  },
  methods: {
     async getLocation()  {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      function onError(error) {
        alert(
          "code: " + error.code + "\n" + "message: " + error.message + "\n"
        );
      }
      document.addEventListener(
        "deviceready",
        () => {
          console.log("device is ready1");
          navigator.geolocation.getCurrentPosition(
            (position) => this.position = position,
            onError,
            options
          );
        },
        false
      );
    },
  },
};
</script>

<style>
</style>