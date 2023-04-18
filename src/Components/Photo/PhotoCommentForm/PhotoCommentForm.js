import React from 'react'
import { ReactComponent as Enviar } from '../../../Assets/enviar.svg'
import useFetch from '../../../Hooks/useFetch'
import { COMMENT_POST } from '../../../services/api'

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
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        name="comment"
        placeholder="Comente..."
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  )
}

export default PhotoCommentForm