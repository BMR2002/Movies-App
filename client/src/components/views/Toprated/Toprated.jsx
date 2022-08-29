import React from 'react'
import { useEffect, useState } from 'react';
import {API_URL, API_KEY, IMAGE_URL} from '../../Config'
import {Typography, Row, Button} from 'antd'
import  GridCard  from './Sections/gridcard';
import './toprated.css'
const {Title} = Typography;

function Toprated() {

    const [Movies, setMovies]=useState([])
    const [count,setCount]=useState(1)
    useEffect(()=>{
       fetch(`${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=${count}`).then(response=>response.json()).then(response => {/*console.log("movies list",response)*/
        setMovies(response.results)
    })
    }, [count])
    return (
        <>
         <div style={{ width:'100%', margin:'0'}}>              
            {/* Body  */}
            <div style={{ width:'85%', margin:'1rem auto'}}>
              <Title level={2}>Top rated movies</Title>
              <hr />

              {/* Grid cards */}

              <Row gutter={[16,16]}>
                   {Movies && Movies.map((movie,index)=>(
                       <React.Fragment key={index}>
                           {movie.poster_path && <GridCard 
                            image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                            movieId={movie.id}
                           />}
                       </React.Fragment>
                   ))}
              </Row>

              {/* Load More Button */}
              <br></br>
               <div className="load_more" style={{justifyContent: 'center'}}>
                  <Button onClick={() => setCount(count + 1)}>Load More</Button>
               </div>
               <div className='reset' style={{justifyContent: 'center'}}>
                  <Button onClick={() => setCount((count-1)<=0?1:(count-1))}>Previous Page</Button>
               </div>              
            </div>
         </div>
        </>
    )
}

export default Toprated