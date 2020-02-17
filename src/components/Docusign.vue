<template>
  <div>

  </div>

</template>

<script>

export default {

  name: "Docusign",
  props: {
  },
  data() {
    return {
      toastmessageDocu: "leer"
    };
  },
  components:{

  },
  methods: {
    signApi(urlToOpen){
      if (urlToOpen!= "") {
        //hier wird dann später die DS API aufgerufen
        window.open(urlToOpen, '_blank');
      }       
    }
   
  }
};
</script>

<style >
</style>
