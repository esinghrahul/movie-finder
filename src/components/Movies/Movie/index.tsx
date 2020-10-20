import React from 'react';
import './style.css';

type Props= {
    key: any
    title: string
    year: string
    image: string
}

const Movie: React.FC<Props> = props => {
    return <div className = "movie">
        <h2>{props.title}</h2>
        <img alt='Movie Poster' src = {props.image} />
        <h3>{props.year}</h3>
    </div>
}

export default Movie;