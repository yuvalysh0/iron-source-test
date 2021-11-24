export default {
  addDessert: async ({commit},payload) =>{
    commit('setNewDessert', payload.newDessert)
  },

  removeDessert: async ({commit},payload) =>{
    commit('deleteDessert', payload)
  },
}
