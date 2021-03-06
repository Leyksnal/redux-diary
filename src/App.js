import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Diary from './Components/Diary'
import Fav from './Components/Fav'
import Post from './Components/Post'
import { Private } from './Components/Private'
import SignIn from './Components/Signs/SignIn'
import SignUp from './Components/Signs/SignUp'
import Header from './Components/Views/Header'
import Home from './Components/Views/Home'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/diary' element={<Private>
        <Diary/>
      </Private>}/>
      <Route path='/favorite' element={<Private>
        <Fav/>
      </Private>}/>
    </Routes>
    </BrowserRouter>
  )
}
