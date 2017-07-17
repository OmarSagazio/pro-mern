// React
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { createStore } from 'redux'

// Components
import Counter from './components/Counter'
// Reducercs
import counter from './reducers'

// Consts
const store = createStore(counter)
const rootEl = document.getElementById('root')


//
const render = () => ReactDOM.render(
    <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
)

render()
store.subscribe(render)
