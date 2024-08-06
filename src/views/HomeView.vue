<script>
import AppFooterVue from '../components/AppFooter.vue';
import imagenav from '../components/imagenav.vue';
import TestHeaderVue from '../components/TestHeader.vue';


export default {
  name:"Home",
  components: {
    TestHeaderVue,
    imagenav,
    AppFooterVue,
  },
  data: () => ({}),
  mounted() {
    document.title = "weh";
  }
};

</script>

<template>
  <!-- <Header></Header> -->
  <TestHeaderVue></TestHeaderVue>
  <v-content>
   <imagenav></imagenav>
   <Services></Services>
   <Features></Features>
   <Testimonals></Testimonals>
   <v-divider></v-divider>
   <MoreInformationVue></MoreInformationVue>
  </v-content>
  <AppFooterVue></AppFooterVue>
</template>

<style scoped>
  
</style>
