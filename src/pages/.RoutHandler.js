import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Testing from './Testing'
import Landing from './Landing'
import Errors from './Errors'
import Game from './Game'

const RoutHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Errors />} />
        <Route path='/' element={<Landing />} />
        <Route path='/' element={<Game />} />
        <Route path='/testing' element={<Testing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutHandler
