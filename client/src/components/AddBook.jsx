import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/book/add", {
            name: name,
            author: author,
            imageURL: imageUrl
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true // Include cookies with the request
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
        // fetch("http://localhost:3001/book/add",{
        //     method:"POST",
        //     body:JSON.stringify({
        //         "name":name,
        //         "author":author,
        //         "imageURL":imageUrl
        //     }),
        //     headers:{
            
        //         'Content-type':'application/json'
        //     },
        //     credentials: 'include' 

        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        // })
        // .catch(err=>{
        //     console.log("Error")
        // })
    };

    return (
        <div className='student-form-container'>
            <form className='student-form' onSubmit={handleSubmit}>
                <h2>Add Book</h2>
                <div className='form-group'>
                    <label htmlFor='book'>Book Name:</label>
                    <input
                        type='text'
                        id='book'
                        name='book'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='author'>Author Name:</label>
                    <input
                        type='text'
                        id='author'
                        name='author'
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='image'>Image URL:</label>
                    <input
                        type='text'
                        id='image'
                        name='image'
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddBook;
