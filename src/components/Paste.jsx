import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

 
const Paste = () => {
  const pastes = useSelector((state)=> state.paste.pastes);
  const [searchTerm ,setSearchTerm] = useState('');


  const dispatch = useDispatch();
  const filteredData = pastes.filter(
    (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
   
  function deletehandle(pasteId){
    dispatch(removefromPastes(pasteId));
    console.log("delete");
  }
 

  return (
    
    <div>
       <input
        className='input'
        type="search"
        placeholder='Search Here'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)} />
        <div className='card-list'>
          {
            filteredData.length >0 && 
            filteredData.map(
              (paste)=>{
                return   <div className='main-card'>
                            <div className='card'>
                  
                             <div className='text'>
                                 {paste.title}
                                 <div className='subtitle'>
                                    {paste.content}
                                  </div>
                              </div>
                             </div> 
                    
                           <div className='btn-list'>

                      
                      
                      <button className='btn' 
                         onClick={()=>{
                          navigator.clipboard.writeText(paste?.content)
                          toast.success("copied to clipboard")
                         }}
                      >Copy</button>
                      <button className='btn' onClick={()=> deletehandle(paste?._id)}>Delete</button>
                      
                      
                           </div>
                </div>
                  
                    
              }
            )
          }
        </div>
    </div>
  )
}

export default Paste
