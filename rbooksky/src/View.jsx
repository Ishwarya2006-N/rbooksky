import React, { useState } from 'react';
import axios from 'axios';
function View() {
  const [btn, setBtn] = useState(false);
  const [title,settitle] =useState('');
  const [author,setauthor] =useState('');
  const [description,setdescription]=useState('');
  const handlecreate=async(t,a,d)=>{
    axios.post(`http://localhost:3007/give`,{"title":t,"author":a,"description":d})
    .then(console.log("created"))
    setBtn(false)
    settitle('')
    setauthor('')
    setdescription('')
    .catch(err=>console.log(err))
    
  }
  return (
    <>
      <button className='add-button' onClick={() => setBtn(true)}>+</button>

      {btn && (
        <div className="popup-overlay">
          <div className="pop-box">
            <h2>Add Book</h2>
            <h2> <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder="Book Title" className="pop-title"></input></h2>
            <h5> <input value={author} onChange={(e)=>{setauthor(e.target.value)}} type="text" placeholder="Book Author" className="pop-author"></input></h5>
            <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} placeholder="Short description.." className="pop-description"></textarea>
            <button  onClick={()=>{handlecreate(title,author,description)}} className="pop-add">Add</button>
            <button onClick={() => setBtn(false)} className="pop-del">Delete</button>
            
          </div>
        </div>
      )}
    </>
  );
}

export default View;
