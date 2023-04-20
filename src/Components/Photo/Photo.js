import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../services/api'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import PhotoContent from './PhotoContent/PhotoContent'
import Head from '../Head/Head'

const Photo = () => {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    request(url, options)
  }, [request, id])

  if (error) return <Error err={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    )
  else return null
}

export default Photo
