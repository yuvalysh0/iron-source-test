<template>
  <q-table
    flat
    class="table"
    :dense="$q.screen.lt.md"
    :data="data"
    :columns="columns"
    row-key="name"
    style="border: 1px solid #E6E6E6; border-radius: 30px"
  >
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          {{ col.label }}
        </q-th>
        <q-th>Actions</q-th>
      </q-tr>
    </template>


    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          {{ col.value }}
        </q-td>
        <q-td>
          <q-btn @click="deleteDessert(props.row.dessertName)" color="negative" icon="delete" push></q-btn>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "DesertTable",
  data() {
    return {
      columns: [
        {
          name: 'dessertName',
          required: true,
          label: 'Dessert Name',
          align: 'left',
          field: 'dessertName',
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px',
          headerClasses: 'bg-primary text-white'
        },
        {name: 'dessertAmount', align: 'center', label: 'Amount', field: 'dessertAmount', sortable: true},
      ],
      data: [],
    }
  },

  computed: {
    ...mapState('deserts', ['allDesserts'])
  },

  methods: {
    ...mapActions('deserts', ['removeDessert']),

    deleteDessert(dessertName) {
      this.removeDessert({dessertName}).then(() => {
        this.data = this.allDesserts
        this.$q.notify({
          message: 'You removed the dessert successfully!',
          color: 'negative'
        })
      }).catch(err => console.log(err))
    }
  },

  created() {
    this.data = this.allDesserts
  }
}
</script>

<style scoped>

.table {
  margin: 2em auto;
  width: 90%;
}

</style>
