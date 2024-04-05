import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Education from './components/Education/education'

import LoginPage from './components/LoginPage/login'
import RegisterPage from './components/RegisterPage/register'
import Home from './components/Home/home'
import ProjectCard from './components/Projects/project'
import ContactForm from './components/Contact/contact'
import PortfolioForm from './components/Form/form'

const App=()=>{

  return(
    <BrowserRouter>
 
    <Routes>
    <Route path="/" element={<LoginPage />}></Route> 
    <Route path="/register" element={<RegisterPage />}></Route> 
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/education' element={<Education/>}></Route>
    <Route path='/projects' element={<ProjectCard/>} ></Route>
    <Route path='contact' element={<ContactForm/>}></Route>
    <Route path='/form' element={<PortfolioForm/>}></Route>
    </Routes>
    </BrowserRouter>
  )
  } 

export default App