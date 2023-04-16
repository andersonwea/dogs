import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { UserStorage } from './storage/UserContext'
import ProtectedRoute from './storage/ProtectedRoute'
import User from './pages/User/User'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={<ProtectedRoute>{<User />}</ProtectedRoute>}
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
