<template>
  <q-page>
    <div class="container">
      <div class="header">
        <h1>The Ultimate Desserts Table</h1>
      </div>
      <div class="content">
        <AddNewDesert/>
        <DesertTable/>
        <DessertsChart/>
      </div>
    </div>
  </q-page>
</template>

<script>
import AddNewDesert from "components/AddNewDesert";
import DesertTable from "components/DesertTable";
import DessertsChart from "components/DessertsChart";
import {mapState} from "vuex";

export default {
  name: 'PageIndex',

  components: {
    DesertTable,
    AddNewDesert,
    DessertsChart,
  },
  computed: {
    ...mapState('deserts', ['allDesserts'])
  },
}
</script>

<style scoped lang="scss">

.q-page {
  background:linear-gradient(to bottom, rgba(17, 17, 17, 0.52), rgba(0, 0, 0, 0.73)) ,url("../assets/image.jpg") no-repeat;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .header {
    h1 {
      font-size: 2.5em;
      color: var(--q-color-primary);
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  .content {
    width: 960px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}

@media screen and (max-width: 768px) {

  .container {
    .header {
      h1 {
        font-size: 1.5em;
        line-height: 2;
      }
    }

    .content {
      width: 400px;
    }
  }
}

</style>
