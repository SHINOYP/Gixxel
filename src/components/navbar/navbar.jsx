import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import play from '../../assets/play.svg'
import cinema from '../../assets/cinema.svg'
import tv from '../../assets/tv.svg'
import Btn_fs from '../../assets/first.svg'
import Popup from '../sidebar_window/movie/movie'
import Popup2 from '../sidebar_window/tv/tv'
import { useRef,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './navbarStyle.sass'

export default function Navbar() {
    const navigate = useNavigate();
    const [buttonPopup,setButtonPopup]=useState(false);
    const [buttonPopup2,setButtonPopup2]=useState(false);
    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();
    
    const handleClickOutside = e => {
      if (!myRef.current.contains(e.target)) {
          setClickedOutside(true);
          setButtonPopup(false);
          setButtonPopup2(false);
      }
    };
   
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    const handlePop=()=>{
        setButtonPopup2(false)
        setButtonPopup(!buttonPopup)
    }
    const handlePop2=()=>{
        setButtonPopup(false)
        setButtonPopup2(!buttonPopup2)
    }
    const handleHome=()=>{
      setButtonPopup(false)
      setButtonPopup2(false)
    }
   
  return (
    <div ref={myRef} >
    <nav  >
        <div className='flex flex-col items-center justify-start absolute'>
         
            <button className="my-10 hover:bg-gray-300"  >
                <img src={play} />
            </button> 
      
            <NavLink to={'/'} className="mb-10 hover:bg-gray-300">
                <button onClick={handleHome} ><img src={Btn_fs}/></button>
            </NavLink>
        
            <button onClick={handlePop} className="mb-10 hover:bg-gray-300" >
               <img src={cinema}/>
            </button>
           
           <button    onClick={handlePop2} className="mb-10 hover:bg-gray-300">
                <img src={tv}/>
           </button>
            
        </div>
         
    </nav>
        <Popup  trigger={buttonPopup} setTrigger={setButtonPopup} >

        <button 
        onClick={() => {
            navigate('/movies', { state: { myProp: 28 } });
          }}
        className="button-85   relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900  rounded-full  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                Action
            </span>
        </button>
        <button
        onClick={() => {
            navigate('/movies', { state: { myProp: 12 } });
          }}

        className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900  rounded-full  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative pl-24 pr-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                 Adventure
            </span>
        </button>
        <button 
          onClick={() => {
            navigate('/movies', { state: { myProp: 16 } });
          }}

        className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900  rounded-full  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-24 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                 Animation
            </span>
        </button>                
        <button 
          onClick={() => {
            navigate('/movies', { state: { myProp: 35 } });
          }}

        className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900  rounded-full  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                Comedy
            </span>
        </button>         
        <button 
          onClick={() => {
            navigate('/movies', { state: { myProp: 80 } });
          }}

        className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900  rounded-full  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                Crime
            </span>
        </button>
        <button 
          onClick={() => {
            navigate('/movies', { state: { myProp: 10571 } });
          }}

        className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900  rounded-full  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
              Fantasy
            </span>
        </button>
        <button 
          onClick={() => {
            navigate('/movies', { state: { myProp: 27 } });
          }}

        className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900  rounded-full  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                Horror
            </span>
        </button>
        <button
          onClick={() => {
            navigate('/movies', { state: { myProp: 18 } });
          }}

        className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900  rounded-full  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
            Drama
            </span>
        </button>
        <button 
              onClick={() => {
                navigate('/movies', { state: { myProp: 14 } });
              }}
    
        className="relative inline-flex items-center justify-center p-0.5 mb-4  mr-2 overflow-hidden text-sm font-medium text-gray-900  rounded-full  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
            Fantasy
            </span>
        </button>
        <button 
          onClick={() => {
            navigate('/movies', { state: { myProp: 878 } });
          }}

        className="button-85">
            <span className="relative pl-20 pr-24 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
            Science Fiction
            </span>
        </button>
        </Popup> 
        <Popup2  trigger={buttonPopup2} setTrigger={setButtonPopup2} >
            <button 
              onClick={() => {
                navigate('/tv', { state: { myProp: 10759} });
              }}
             className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                    Action
                </span>
            </button>
            <button 
              onClick={() => {
                navigate('/tv', { state: { myProp: 16} });
              }}          
            className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative pl-24 pr-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                  Animation
                </span>
            </button>
            <button 
              onClick={() => {
                navigate('/tv', { state: { myProp: 10751} });
              }} 
            className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                Family
                </span>
            </button>                
            <button
               onClick={() => {
                navigate('/tv', { state: { myProp: 35} });
              }} 
            className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                    Comedy
                </span>
            </button>         
            <button 
               onClick={() => {
                navigate('/tv', { state: { myProp: 80} });
              }}
            className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                    Crime
                </span>
            </button>
            <button 
               onClick={() => {
                navigate('/tv', { state: { myProp: 99} });
              }}
            className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-24 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                Documentary
                </span>
            </button>
            <button 
             onClick={() => {
              navigate('/tv', { state: { myProp: 18} });
            }}
            className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                Drama
                </span>
            </button>
            <button 
               onClick={() => {
                navigate('/tv', { state: { myProp: 9648} });
              }}
            className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                Mystery
                </span>
            </button>
            <button 
               onClick={() => {
                navigate('/tv', { state: { myProp: 10764} });
              }}
            className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                Reality
                </span>
            </button>
            <button
               onClick={() => {
                navigate('/tv', { state: { myProp: 37} });
              }}
            className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative pl-28 pr-28 py-3 rounded-full  transition-all ease-in duration-75 bg-white dark:bg-gray-800   group-hover:bg-opacity-0">
                Western
                </span>
            </button>
        </Popup2>   
    </div>
  )
}
