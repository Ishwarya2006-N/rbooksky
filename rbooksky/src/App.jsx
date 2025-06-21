import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [show,setshow]=useState([])
  useEffect(()=>{
  axios.get(' http://localhost:3007/give')
  .then(data=>setshow(data.data))
  .catch(err=>console.log(err))

  },[show])
  const handledelete=async(id)=>{
    axios.delete(`http://localhost:3007/give/${id}`)
    setshow(task.filter(f=>f.id!==id));
   
  }
  return (
    <div>
      {show.length>0?(show.map((s)=>
      <div  key={s.id} className='rbox'>
        <h2 className='rtitle'>{s.title}</h2>
        <h5 className='rauthor'>{s.author}</h5>
        <p className='rdescription'>{s.description}</p>
        <button  onClick={()=>{handledelete(s.id)}} className='resbtn'>Delete</button>
      </div>))
      
      :(<p>loading</p>)}
    </div>
  )
}

export default App