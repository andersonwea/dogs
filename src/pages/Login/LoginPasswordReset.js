import React from 'react'
import Input from '../../Components/Forms/Input/Input'
import Button from '../../Components/Forms/Button/Button'
import useForm from '../../Hooks/useForm'
import { PASSWORD_RESET } from '../../services/api'
import useFetch from '../../Hooks/useFetch'
import Error from '../../Components/Error/Error'
import { useNavigate } from 'react-router-dom'
import Head from '../../Components/Head/Head'

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const { error, loading, request } = useFetch()
  const password = useForm()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const { response } = await request(url, options)
      if (response.ok) navigate('/login')
    }
  }

  return (
    <div>
      <Head title="Resete a senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      {<Error err={error} />}
    </div>
  )
}

export default LoginPasswordReset
