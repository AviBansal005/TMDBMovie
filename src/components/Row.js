import React,{ useState,useEffect } from 'react'
import axios from '../apis/axios'
import './Row.css'
import { Link } from "react-router-dom";

const image = "http://image.tmdb.org/t/p/original/"

function Row({ title,fetchUrl }) {
    
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className="row">
            <h2 style={{color: "white", display:"inline"}}>{title}</h2>
            <div className="row_posters">
                {
                    movies.map(movie =>
                        <Link className="navbar-item" to={`/movie/${movie.id}`}>
                            <img className="row_poster" key={`${title}${movie.id}`} src={`${image}${movie.poster_path}`} alt={movie.name} />
                        </Link> 
                    )
                }
            </div>
        </div>
    )
}

export default Row
