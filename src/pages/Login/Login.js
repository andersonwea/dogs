import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import { UserContext } from '../../storage/UserContext'

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login) return <Navigate to="/conta" />

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
      </Routes>
    </div>
  )
}

export default Login
