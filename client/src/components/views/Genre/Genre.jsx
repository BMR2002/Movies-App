import React from 'react'
import { useEffect, useState } from 'react';
import {API_KEY, IMAGE_URL} from '../../Config'
import {Row, Button} from 'antd'

import  GridCard  from '../LandingPage/Sections/GridCard';
import './Genre.css'
function Genre() {
    const [Movieslist, setMovieslist]=useState([])
    const [query, setquery]=useState("")
    useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${query || 9648}`).then(response=>response.json()).then(response => {/*console.log("movies list",response)*/
    setMovieslist(response.results)
        //console.log(response.results)
    })
    }, [query])
    const onChange=(e)=>{
        e.preventDefault();
        setquery(e.target.value)
    }
    return (
        <div>
             <div className='genrebutton'>
                <div className='drama' >
                  <Button onClick={() => setquery(18)}>Drama</Button>
               </div>  
                <div className='action' >
                  <Button onClick={() => setquery(28)}>Action</Button>
               </div>   
               <div className='horror' >
                  <Button onClick={() => setquery(27)}>Horror</Button>
               </div>   
               <div className='thriller'>
                  <Button onClick={() => setquery(53)}>Thriller</Button>
               </div> 
              <div className='crime'>
                  <Button onClick={() => setquery(80)}>Crime</Button>
               </div> 
                <div className='adventure' >
                  <Button onClick={() => setquery(12)}>Adventure</Button>
               </div>  
               <div className='family'>
                  <Button onClick={() => setquery(10751)}>Family</Button>
               </div>
               <div className='comedy'>
                  <Button onClick={() => setquery(35)}>Comedy</Button>
               </div>                     
             </div> 
               {query.length===0 && Movieslist.length===0 && <h1 className='loading'>...Loading!</h1> }
               {query.length!==0 && Movieslist.length===0 && <h1 className='nolistfound'>There are no movies found related to your search!</h1> }
                    
           <div className='movieslist'>
            <Row gutter={[16,16]}>
                   {Movieslist && Movieslist.map((movie,index)=>(
                       <React.Fragment key={index}>
                           <GridCard 
                            image={movie.poster_path? `${IMAGE_URL}w500${movie.poster_path}`:"https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8="}
                            movieId={movie.id}
                           />
                       </React.Fragment>
                   ))}
              </Row>
            </div>
        </div>
    )
}

export default Genre