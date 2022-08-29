import React from 'react'
import { useEffect, useState } from 'react';
import {API_URL, API_KEY, IMAGE_URL} from '../../Config'
import {Typography, Row, Button} from 'antd'
import MainImage from './Sections/MainImage';
import  GridCard  from './Sections/GridCard';
import './LandingPage.css'
const {Title} = Typography;

function LandingPage() {

    const [Movies, setMovies]=useState([])
    const [count,setCount]=useState(1)
    useEffect(()=>{
        //console.log("hello world")
       fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${count}`).then(response=>response.json()).then(response => {/*console.log("movies list",response)*/
        setMovies(response.results)
    })
    }, [count])
    return (
        <>
         <div style={{ width:'100%', margin:'0'}}>
            
            {/* Movie Main Image*/}
         {Movies[0] && <MainImage image={`${IMAGE_URL}w1280${Movies[1].backdrop_path && Movies[1].backdrop_path}`} title={Movies[1].original_title} text={Movies[1].overview} /> }
            
              
            {/* Body  */}
            <div style={{ width:'85%', margin:'1rem auto'}}>
              <Title level={2}>Movies By lastest</Title>
              <hr />

              {/* Grid cards */}

              <Row gutter={[16,16]}>
                   {Movies && Movies.map((movie,index)=>(
                       <React.Fragment key={index}>
                           <GridCard 
                            image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                            movieId={movie.id}
                           />
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

export default LandingPage
