import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import Movie from './Movie';
import './style.css';

type Props = {
    movies: any
    setMovies: any
    setTempMovies: any
}

type Movie = {
    imdbID: string
    image: string
    title: string
    year: string
}

const API_KEY = 'eb7f19c3';

const series: any = ['Jack', 'Cowboy Bebop']

const Movies: React.FC<Props> = props => {
    useEffect(()=> {
        const promises = series.map((series: any) => {
            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_KEY}&page=1`)
            .then(res=> res.json())
            })
        Promise.all(promises).then((movies: any)=> {
            const updatedMovies: Movie[] = movies.map((movie:any)=> movie.Search).flat(2).map(
                (movie: any)=> ({
                    title: movie.Title,
                    year: movie.Year,
                    image: movie.Poster,
                    imdb: movie.imdbID
                }))
                props.setMovies(updatedMovies);
                props.setTempMovies(updatedMovies);
        })
    }, [])
    // console.log(props.movies)

    if(props.movies.length === 0){
        return <div className="loader">
            <CircularProgress />
        </div>
    }

    return <div className="movies"> 
    {props.movies.map((movie: Movie) => {
        return <Movie 
            key = {movie.imdbID}
            title = {movie.title}
            year = {movie.year}
            image = {movie.image}
        />
    })
}
</div>
}
export default Movies;