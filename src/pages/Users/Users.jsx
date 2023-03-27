import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Users.scss'
function Users() {
  const {slug} = useParams()
  const [post, setPost] = useState([])
 
  useEffect(()=> {
      fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then((res)=> res.json())
    .then((data)=>setPost(data.filter((a)=>(a.userId === Number(slug) ))))
  },[slug])
  return (
    <div>
      <h1>Posts</h1> 
      <ul className="card__list">
        {
          post && post.map((i, index)=>(
            <li  key={index} className='card_item '>
              <h2>userId: {i.userId}</h2>
              <p>{i.title}</p>
              <span>{i.id}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users