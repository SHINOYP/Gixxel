
import React from 'react'

export default function movieCard(props) {
    const IMG_URL=import.meta.env.VITE_IMG_URI;
  return (
    <div className='flex flex-col mr-3 bg-black relative' style={{height:'440px',width:'292px'}}>
        
        <img className='h-full' src={IMG_URL+props.value.poster_path}/>
       
    </div>
  )
}
