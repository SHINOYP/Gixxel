import './movie_style.css'
import React from 'react';


 const AddnewCourse=(props)=>{
    return(props.trigger)?(
        <div className="popup flex flex-col ">
            <h1 className='w-full ml-4 text-xl font-normal  '>MOVIES</h1>
            <div className='popup-inner rounded-xl backdrop-blur-md '>
                
                {props.children}
            </div>

        </div>

    ):"";
}


export default AddnewCourse;