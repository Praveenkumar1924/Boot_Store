import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import axios from 'axios';
const DeleteBook = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        axios.delete(`http://localhost:3001/book/book/${id}`) 
          .then(res => {
           if (res.data.deleted) {
              navigate('/books')
            } 
          })
          .catch(err => console.log(err))
      }, [])
}

export default DeleteBook