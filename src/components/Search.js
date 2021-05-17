import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { APIKEY } from '../keys'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Search.css'

function Search() {

    const { name } = useParams()
    const [movie,setmovie] = useState([])
    const image = "http://image.tmdb.org/t/p/original/"

    useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${name}`)
            .then(res => {
                const data = res.data.results
                return setmovie(data)
            })
            .catch(err => {
                console.log(err)
            })
        },[movie,name])

    return (
        <div style={{marginTop: "70px"}}>
            <h2 style={{display: "block", color: "black", backgroundColor: "#339966", textAlign: "center"}}>Search Results for "{name}"</h2>
            <div className="row_posts">
                {
                    movie.map(movie =>
                        <Link className="navbar-item" to={`/movie/${movie.id}`}>
                            <img className="row_post" key={movie.id} src={`${image}${movie.poster_path}`} alt={movie.name} />
                        </Link> 
                    ) 
                }
            </div>
        </div>
    )
}

export default Search
