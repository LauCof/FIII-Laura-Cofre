import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [dentist, setDentist] = useState({})
    const params = useParams()
    console.log(params)
    
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users'+params.id)
        .then(res => setDentist(res.data))
        .catch(err => console.log(err))
    }, [])
    
  return (
    <div>
        <img src='./src/images/doctor.jpg' alt="" />
        <h3>{dentist.name}</h3>
        <h4>{dentist.username}</h4>
        <p>{dentist.id}</p>
    </div>
  )
}

export default Detail