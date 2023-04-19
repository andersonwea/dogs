import React from 'react'
import FeedPhotosItem from '../../../Components/Feed/FeedPhotosItem/FeedPhotosItem'
import useFetch from '../../../Hooks/useFetch'
import { PHOTOS_GET } from '../../../services/api'
import Error from '../../../Components/Error/Error'
import Loading from '../../../Components/Loading/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
      const { reponse, json } = await request(url, options)
      console.log(json)
    }
    fetchPhotos()
  }, [request])

  if (error) return <Error err={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    )
  else return null
}

export default FeedPhotos
