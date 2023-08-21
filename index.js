
// Import entire Redux object
const Redux = require('redux');

// Import just createStore method
const createStore = require('redux').createStore;



// Action 
const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
  return {
    type: BUY_CAKE
  }
}

// Reducer
const initialState = { 
  numOfCakes: 10
}

function cakeReducer(state = initialState, action) {
  switch(action.type) {
    case BUY_CAKE: 
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }

    default:
      return state
  }
}

// Store 
// Create store
const store = createStore(cakeReducer);

console.log("Initial state: ", store.getState())

// Dispatch
const unsubscribe = store.subscribe(() => console.log("Update state:",store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

const buy = () => {
  store.dispatch(buyCake())
}

buy()
buy()


// Subscribe to changes