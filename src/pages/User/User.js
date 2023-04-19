import React from 'react'
import UserHeader from './UserHeader/UserHeader'
import Feed from '../../Components/Feed/Feed'
import UserPhotoPost from './UserPhotoPost/UserPhotoPost'
import UserStats from './UserStats/UserStats'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../storage/UserContext'
import NotFound from '../../Components/NotFound/NotFound'

const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
