import React from 'react'

const types = {
  email: {
    regex:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
    message: 'Preencha um email válido'
  }
}

const useForm = type => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  const validate = value => {
    if (type === false) return true
    if (value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  const handleChange = ({ target }) => {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    handleChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
