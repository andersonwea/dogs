import React from 'react'
import Input from '../../Components/Forms/Input/Input'
import Button from '../../Components/Forms/Button/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../services/api'
import Error from '../../Components/Error/Error'
import Head from '../../Components/Head/Head'

const LoginPasswordLost = () => {
  const login = useForm()
  const { data, loading, error, request } = useFetch()

  const handleSubmit = async event => {
    event.preventDefault()
    if (login.validate) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar')
      })
      await request(url, options)
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p className={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error err={error} />
    </section>
  )
}

export default LoginPasswordLost
