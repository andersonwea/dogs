import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../../Hooks/useFetch'
import { PHOTO_GET } from '../../../services/api'
import Error from '../../../Components/Error/Error'
import Loading from '../../Loading/Loading'
import PhotoContent from '../../Photo/PhotoContent/PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch()

  const handleOutsideClick = event => {
    if (event.target === event.currentTarget) setModalPhoto(null)
  }

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error err={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
