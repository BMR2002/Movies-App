import React, {useEffect,useState} from 'react'
import axios from 'axios'


function Favorite(props) {


    const [favoriteNumber, setfavoriteNumber]=useState(0) 
    const [Favorited, setFavorited]=useState(false)
    const variable={
        userFrom: props.userFrom,
        movieId: props.movieId,
        movieTitle: props.movieInfo.original_title,
        movieImage: props.movieInfo.backdrop_path,
        movieRunTime: props.movieInfo.runtime
    }

  useEffect(()=>{

     axios.post('/api/favorite/favoriteNumber', variable).then(response =>{
          if(response.data.success){
             setfavoriteNumber(response.data.favoriteNumber);
          }else{
            alert('failed to get favoriteNumber')
          }
     })

    axios.post('/api/favorite/favorited',variable).then(response =>{
          if(response.data.success)
          {
               setFavorited(response.data.favorited)
          }
          else{
            alert('failed to get the favorite info')
          }
    })

  },[])
     
  const onClickFavorite = ()=>{
            
      if(Favorited)
      {
         axios.post('/api/favorite/removeFromFavorite',variable).then (response =>{
           if(response.data.success){
                  setfavoriteNumber(favoriteNumber-1)
                  setFavorited(!Favorited)                  
           }else{
             alert(' Failed  to remove from Favorite ')
           }
         })

      }else{
         axios.post('/api/favorite/addToFavorite',variable).then (response =>{
           if(response.data.success){
                  setfavoriteNumber(favoriteNumber+1)
                  setFavorited(!Favorited)
           }else{
             alert(' Failed  to add to Favorites ')
           }
         })
      }
  }

  return (
    <div>
        <button onClick={onClickFavorite}>{Favorited ? "remove from Favorite " :"Add to Favorite"} {favoriteNumber}</button>
    </div>
  )
}

export default Favorite

