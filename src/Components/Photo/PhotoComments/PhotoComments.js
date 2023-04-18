import React from 'react'
import styles from './PhotoComments.module.css'
import PhotoCommentForm from '../PhotoCommentForm/PhotoCommentForm'
import { UserContext } from '../../../storage/UserContext'

const PhotoComments = props => {
  const { login } = React.useContext(UserContext)
  const [comments, setComments] = React.useState(() => props.comments)

  return (
    <>
      <ul className={styles.comments}>
        {comments.map(comment => {
          return (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          )
        })}
      </ul>
      {login && <PhotoCommentForm id={props.id} setComments={setComments} />}
    </>
  )
}

export default PhotoComments
