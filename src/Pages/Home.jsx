import React from 'react'
import Card from '../Components/Card'
import { useEffect, useState } from 'react';
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () =>{
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error catching data: ", error));
  }, []);

  return (
    <main className="Home" >
      <div className='card-grid'>

        {users.map((dentist) => <Card key={dentist.id} item={dentist}/>)}           
      </div>
    </main>
  ) }

export default Home;