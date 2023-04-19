import React from 'react'
import styles from './PhotoCommentForm.module.css'
import { ReactComponent as Enviar } from '../../../Assets/enviar.svg'
import useFetch from '../../../Hooks/useFetch'
import { COMMENT_POST } from '../../../services/api'
import Error from '../../Error/Error'

const PhotoCommentForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('')
  const { error, request } = useFetch()

  const handleSubmit = async event => {
    event.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments(comments => [...comments, json])
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textArea}
        value={comment}
        name="comment"
        placeholder="Comente..."
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error erro={error} />
    </form>
  )
}

export default PhotoCommentForm
