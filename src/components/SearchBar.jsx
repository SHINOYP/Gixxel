import React,{useState} from 'react'
import { Navigate,useNavigate } from 'react-router-dom';



export default function SearchBar() {
  const navigate= useNavigate();
  const [query,setQuery]=useState("");
  const [search,setSearch]=useState([]);

  const handleInputChange=(event)=>{
    setQuery(event.target.value);
  }
  const handleSearchMovie=async()=>{
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=af303dcb7ba62163922f8128770e6c9a&language=en-US&query=${query}&page=1&include_adult=false`,
    {method:"GET"})

    if(response.ok){
      const result=await response.json()
      setSearch(result);
      navigate('/search',{state:{result}});
    }else{
      
    }
  }
  return (
    <div className="pt-2 absolute mx-auto text-2xl  text-white z-20" style={{bottom:'850px',right:'160px'}}>
        <input value={query} onChange={handleInputChange} className="border-4 border-white  bg-transparent  h-12 px-8 pr-16 rounded-full text-sm focus:outline-none"
        type="search" name="search" placeholder="Search"/>
        <button onClick={handleSearchMovie} type="submit" class="absolute right-0 top-0 mt-6 mr-4">
        <svg className="text-white h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966"  xml:space="preserve"
            width="512px" height="512px">
            <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
        </button>
   </div>
  )
}
