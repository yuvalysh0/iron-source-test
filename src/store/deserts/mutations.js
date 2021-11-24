export default {

  setNewDessert: ((state, desert) => {
    state.allDesserts.push(desert)
  }),

  deleteDessert: ((state, payload) => {
    for (let i=0; i < state.allDesserts.length; i++) {
      if (state.allDesserts[i].dessertName === payload.dessertName) {
        state.allDesserts.splice(i, 1)
      }
    }
  })

}
