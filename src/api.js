import { QueryClient, useQuery } from "react-query"


const queryClient=new QueryClient()

const query=useQuery('trend',getTrendingMv)

const getTrendingMv=async()=>{
    const response=await fetch('https://api.themoviedb.org/3/movie/550?api_key=af303dcb7ba62163922f8128770e6c9a',{
        method:"GET"
    })
    return response.json()
}


module.exports={query}