<template>
  <div>
    <q-btn v-if="!addDessertForm" color="secondary" label="Add a new desert" unelevated @click="addDessertForm = true"/>
    <q-btn v-else color="secondary" label="Cancel" unelevated @click="addDessertForm = false"/>
    <div class="form" v-show="addDessertForm">
      <q-input filled v-model="dessertForm.dessertName" label="Dessert Name" />
      <q-input filled v-model="dessertForm.dessertAmount" label="Dessert Amount" type="number" />

      <q-btn color="primary" label="Add desert" unelevated @click="addNewDesert()"/>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AddNewDesert",
  data() {
    return {
      addDessertForm: false,
      dessertForm: {
        dessertName: '',
        dessertAmount: '',
      }
    }
  },

  methods: {
    ...mapActions('deserts', ['addDessert']),

    addNewDesert() {
      if (!this.dessertForm.dessertName || !this.dessertForm.dessertAmount) {
        alert('I think you are missing something... Try again')
        return
      }
      const newDessert = {...this.dessertForm}
      this.addDessert({newDessert}).then(() => {
        this.$q.notify({
          message: 'You added a new dessert!',
          color: 'secondary'
        })
        this.dessertForm.dessertAmount = ''
        this.dessertForm.dessertName = ''
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

.form {
  justify-content: center;
  padding: 1em;
  display: flex;
  gap: 1em;
}

</style>
