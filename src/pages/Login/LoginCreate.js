import React from 'react'
import Input from '../../Components/Forms/Input/Input'
import useForm from '../../Hooks/useForm'
import Button from '../../Components/Forms/Button/Button'
import { USER_POST } from '../../services/api'
import { UserContext } from '../../storage/UserContext'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const { userLogin } = React.useContext(UserContext)

  const handleSubmit = async event => {
    event.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const response = await fetch(url, options)
    if (response.ok) userLogin(username.value, password.value)
    console.log(response)
  }

  return (
    <section className="animaLeft">
      <h1 className="title">Cadastra-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}

export default LoginCreate
