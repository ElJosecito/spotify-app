import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './components/login'
import Options from './components/Options'
import Recommendations from './components/Recommendations'

function Router() {
  return (

    <Provider store={store}>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/callback' element={<Options/>}/>
            <Route path='/recommendations' element={<Recommendations/>}/>
        </Routes>
    </Provider>
  )
}

export default Router