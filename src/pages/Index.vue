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
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .header {
    h1 {
      font-size: 2.5em;
      color: var(--q-color-primary);
      font-weight: bold;
    }
  }

  .content {
    width: 960px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}

</style>
