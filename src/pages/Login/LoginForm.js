import React from 'react'
import styles from './LoginForm.module.css'
import stylesBtn from '../../Components/Forms/Button/Button.module.css'
import { Link } from 'react-router-dom'
import Input from '../../Components/Forms/Input/Input'
import Button from '../../Components/Forms/Button/Button'
import Error from '../../Components/Error/Error'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../storage/UserContext'
import Head from '../../Components/Head/Head'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = React.useContext(UserContext)

  const handleSubmit = async event => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error err={error} />
        {error && <p>{error}</p>}
      </form>

      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/criar">
        Cadastro
      </Link>
    </section>
  )
}

export default LoginForm
