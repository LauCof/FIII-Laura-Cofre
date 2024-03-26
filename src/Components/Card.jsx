import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    const {id, user, username} = item
  return (
    <div>
        <img src='./images/doctor.jpg' alt="foto dentista" />
        <h3>{user}</h3>
        <h4>{username}</h4>
        <h4>{id}</h4>
        <Link to={'/detail/' + item.id}>Ver details</Link>
        <button>Agregar favoritos</button>
    </div>
  )
}

export default Card
