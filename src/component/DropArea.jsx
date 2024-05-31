import React, { useEffect, useState } from 'react'

const DropArea = ({onDrop}) => {
  const [showdrop , setShowdrop] = useState(false)
  useEffect(()=>{

    document.addEventListener('dragstart', ()=>{setShowdrop(true)});
    document.addEventListener('dragend', ()=>{setShowdrop(false)});
    document.addEventListener('drop', ()=>{setShowdrop(false)});
  }, [])
  return (
    <div 
    onDragEnter={()=>{setShowdrop(true)}} 
    onDragLeave={() => setShowdrop(false)}  
    onDrop={()=>{
      onDrop();
      setShowdrop(false);
    }}
    onDragOver={e => e.preventDefault()}
    id='droparea' className =
    {showdrop ? 'show' : 'hide' }
     >Drop Here</div>
  )
}

export default DropArea