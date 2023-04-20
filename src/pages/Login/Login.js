import React from 'react'
import styles from './Login.module.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import { UserContext } from '../../storage/UserContext'
import NotFound from '../../Components/NotFound/NotFound'
import LoginPasswordLost from './LoginPasswordLost'

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
