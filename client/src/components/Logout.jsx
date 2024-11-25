import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({ setRole }) => {
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/auth/logout') // Corrected URL
      .then(res => {
        if (res.data.logout) {
          setRole('')
          navigate('/')
        }
      })
      .catch(err => console.log(err))
  }, [])

  return null; // Make sure to return something from the component
}

export default Logout
