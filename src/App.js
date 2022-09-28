import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com?apikey=3098bf14";



const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
       setMovies(data.Search);
        

    }
    console.log("movies at first location--->", movies);
    useEffect(() => {
        searchMovies();
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value) }}
                ></input>
                <img src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}></img>
            </div>

            <div className="container">

                {
                        movies?.length >0 ? (
                            <div className="container">
                                {movies.map((movie)=> 
                                    <MovieCard movie={movie}></MovieCard>

                                )}
                                
                            </div>
                        ):(
                            <div className="empty">
                                <h2>No Movies available</h2>
                            </div>
                        )
                }
                    
                
                

            </div>

        </div>
    );
};

export default App;