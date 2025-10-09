import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import store from './utils/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </>
  )
}

export default App
