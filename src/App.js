import React from "react";
import { useState, useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg'

import MovieCard from "./MovieCard"

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=fee84d54';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('spiderman')
    }, [])

    return (
        <div className="app">
            <h1>Nontonin</h1>

            <div className="search">
                <input
                    placeholder="Cari Filem"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>Gak nemu Cak</h2>
                        </div>
                    )
            }

        </div>
    )
}

export default App
