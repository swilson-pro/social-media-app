import { legacy_createStore as createStore } from 'redux'


// createStore takes in 2 arguments
// 1: reducer function that will automatically fire later ;)
// 2: initial *global* state

// the reducer function has the state (being the CURRENT STATE)
// and the action object as a parameter

// An action is simply a plain old javascript object (POJO) 
// that tells the reducer what to do next and with what data
// ALL ACTIONS MUST HAVE A TYPE KEY

// example: {type: 'counter/multiply'}
// example: {type: 'user/login', user: data}

const reducer = (state, action) => {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
        case 'user/login':
            return { ...state, currentUser: action.user }
      default:
        return state
    }
  }
const store = createStore(reducer, {value: 0, currentUser: null})

export default store;

/*

A store object has 2 functions that we can call on it anywhere:

store.dispatch()
	This accepts a single JS object with at least a type key/value.
	And will automatically fire the reducer function initially passed to
	The store

store.getState()
	This is how we read data from the global store
	Example: store.getState().currentUser
	Example: store.getState().theme


*/