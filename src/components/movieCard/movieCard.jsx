import './movieCardStyle.sass'
import React from 'react'

export default function movieCard(props) {

    const IMG_URL=import.meta.env.VITE_IMG_URI;
   
  return (
    <div className='mvcard' >
        <img   src={IMG_URL+props.value.poster_path}/>
    </div>
  )
}
