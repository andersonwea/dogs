import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../Components/Forms/Input/Input'
import Button from '../../Components/Forms/Button/Button'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../storage/UserContext'

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
      <h1 className="title">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
