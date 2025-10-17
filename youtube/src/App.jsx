import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import store from './utils/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes,Route } from 'react-router'
import MainBox from './components/MainBox'
import WatchPage from './components/watchPage'

function App() {

  return (
    <>
      <Provider store={store}>
        <Head />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} >
            <Route index element={<MainBox/>}/>
            <Route path="watch" element={<WatchPage/>}/>
          </Route>
         
        </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
