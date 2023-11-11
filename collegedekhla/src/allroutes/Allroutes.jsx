import React from 'react'
import { Routes,Route } from 'react-router-dom'
import home from '../page/home'
import admission from '../page/admission'
import about from '../page/about'
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={home}></Route>
        <Route path='/admission' Component={admission}></Route>
        <Route path='/about' Component={about}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
