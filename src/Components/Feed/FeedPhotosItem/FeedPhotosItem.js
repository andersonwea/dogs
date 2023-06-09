import React from 'react'
import styles from './FeedPhotosItem.module.css'
import Image from '../../Image/Image'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.vizualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
