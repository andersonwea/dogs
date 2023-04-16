import React from 'react'
import Input from '../../Components/Forms/Input/Input'
import useForm from '../../Hooks/useForm'
import Button from '../../Components/Forms/Button/Button'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm()
  const password = useForm()

  const handleSubmit = async event => {
    event.preventDefault()
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
