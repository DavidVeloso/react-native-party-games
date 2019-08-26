import React from 'react'
import Routes from './routes'
import { StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)

export default function App () {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor='transparent' translucent barStyle='light-content' />
      <Routes />
    </Provider>
  )
}
