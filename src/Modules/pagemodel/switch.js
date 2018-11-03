import post from '../../Utils/net'
export const switchcase = {
    state: {}, // initial state
    reducers: {
      // handle state changes with pure functions
      updateSwitch(state, payload) {
        return {...state,...payload}
      }
    },
    effects: {
      // handle state changes with impure functions.
      // use async/await for async actions
      getswitch(payload, rootState) {
        post('/aaa/switches.do',payload)
         .then((res)=>{
            this.updateSwitch(res)
         })
      }
    }
  }