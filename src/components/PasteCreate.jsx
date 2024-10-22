import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToPastes, updateToPaste } from '../redux/pasteSlice';
import './pastecreate.css'


const PasteCreate = () => {

    const [title , setTitle] = useState('')
    const [value, setValue] = useState('');
    const [searchParams , setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    
    function createPaste(){
      const paste = {
        title: title,
        content:value,
        _id: pasteId || Date.now().toString(36),
        createdAt : new Date().toISOString()
        
      }
      if(pasteId){
          // update
          dispatch(updateToPaste(paste))
      }
      else{
        //  create
        dispatch(addToPastes(paste))
      }
      // after creation or updation
      setTitle('');
      setValue("");
      setSearchParams({});
    }
  return (
    
    <div>
          <div className='title'>
      <input className='input'
       type="text"
       placeholder='enter title here'
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       />
       
       <button className='button' onClick={createPaste}>
        {
              pasteId ? "Update Paste" : "Create Paste"
        }
       </button>

     
      </div>

      <div>
        <textarea 
          className='input-text'
          name="" 
          id=""
          placeholder='enter the contenet....'
          onChange={(e)=>setValue(e.target.value)}
          rows={30}
          cols={20}
          >

          </textarea>
      </div>
    </div>
  )
}

export default PasteCreate
