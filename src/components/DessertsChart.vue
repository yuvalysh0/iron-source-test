<template>
  <div>
    {{charData}}
  </div>
</template>

<script>
import {mapState} from "vuex";


export default {
  name: "DessertsChart",
  data() {
    return {
      charData: []
    }
  },
  computed: {
    ...mapState('deserts', ['allDesserts'])
  },
  created() {
    this.charData = this.allDesserts
  },
}
</script>

<style scoped>

</style>
