const store = require("./app/store")
const cakeActions = require("./features/cake/cakeSlice").cakeActions

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated State" , store.getState());
})


store.dispatch(cakeActions.ordered())