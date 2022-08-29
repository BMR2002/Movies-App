import React from 'react'
import { useEffect, useState } from 'react';
import {API_URL, API_KEY, IMAGE_URL} from '../../Config'
import {Row} from 'antd'

import  GridCard  from '../LandingPage/Sections/GridCard';
import './searchpage.css'
function SearchPage() {
    const [Movieslist, setMovieslist]=useState([])
    const [query, setquery]=useState("")
    useEffect(()=>{
    const timer = setTimeout(() => {
        fetch(`${API_URL}search/movie?&api_key=${API_KEY}&query=${query || "a"}`).then(response=>response.json()).then(response => {/*console.log("movies list",response)*/
        setMovieslist(response.results)
        //console.log(response.results)
        })
    }, 500);
    return () => clearTimeout(timer);
    }, [query])
    const onChange=(e)=>{
        e.preventDefault();
        setquery(e.target.value)
    }
    return (
        <div>
           <input type="text" placeholder='  search for any movie' className='inputsearch' onChange={onChange} />
               {query.length===0 && Movieslist.length===0 && <h1 className='loading'>...Loading!</h1> }
               {query.length!==0 && Movieslist.length===0 && <h1 className='nolistfound'>There are no movies found related to your search!</h1> }
                    
           <div className='movieslist'>
            <Row gutter={[16,16]}>
                   {Movieslist && Movieslist.map((movie,index)=>(
                       <React.Fragment key={index}>
                           {movie.poster_path && <GridCard 
                            image={movie.poster_path? `${IMAGE_URL}w500${movie.poster_path}`:"https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8="}
                            movieId={movie.id}
                           /> }
                       </React.Fragment>
                   ))}
              </Row>
            </div>
        </div>
    )
}

export default SearchPage