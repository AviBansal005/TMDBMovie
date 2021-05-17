import React, { useState,useEffect } from 'react'
import { APIKEY } from '../keys'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Movies.css'
import BeautyStars from 'beauty-stars'

function Movies() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [genre, setgenre] = useState([])
    const [poster, setposter] = useState('')
    const [backdrop,setbackdrop] = useState('')
    const image = "http://image.tmdb.org/t/p/original/"
    

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
            .then(res => {
                setMovie(res.data)
                setgenre(res.data.genres)
                setposter(res.data.poster_path)
                setbackdrop(res.data.backdrop_path)
            })
            .catch(err => {
                console.log(err)
            })
    },[id])

    return (
        <div> 
            <div>
                <img src={`${image}${backdrop}`} alt={movie.original_title} height="400px" className="center"/>
            </div>
            <div>
                <div className="leftbox">
                    <img src={`${image}${poster}`} height= "330px" width="400px" alt={movie.original_title} className="thumbnail" />
                </div>
                <div className="rightbox">
                    <h2 className="movieName">{movie.original_title}</h2>
                    <BeautyStars value={movie.vote_average/2} />
                    <p>{movie.release_date} | {movie.runtime} mins</p>
                    <p><strong>Genres </strong> 
                    {  
                        genre.map(movie => `${movie.name}, `)
                    }
                    </p>
                    <div>
                        <p className="desc">Description: {movie.overview}</p>
                        <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View More</a>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Movies
