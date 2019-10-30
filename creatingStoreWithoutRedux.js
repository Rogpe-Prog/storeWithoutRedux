// Creating Store without Redux
//That is knowing how Factory Pattern: a ubiquitous pattern in JS for creating complex object
// then Readux Store is a Factory Pattern

function createStore(reducer) { //creating function Store
    let state = 1

    const getState = () => (state)
    const dispatch = (action) => {
        state = reducer(state, action)
    }
    return { //exposing getState and dispatch
        getState,
        dispatch
    }
}

function reducer(state, action) { //creating reducer
    if (action.type === 'INC') {
        return state + action.payload
    } else if (action.type === 'DEC') {
        return state - action.payload
    } else {
        return state
    }
}

const store = createStore(reducer) //creating Store and passing reducer

const incrementAction = { //creating Action
    type: 'INC',
    payload: 3
}

store.dispatch(incrementAction) //using dispatch with Action to change State on Store

console.log(store.getState()) //-------------> 4
