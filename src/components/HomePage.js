import React from 'react';
import axios from 'axios';

import MovieCard from './Basic/MovieCard'

import 'materialize-css/dist/css/materialize.min.css';

const BASE_URL = 'https://yts.lt/api/v2/'

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            moviesList: ''
        }
    }

    componentDidMount() {
        axios(`${BASE_URL}/list_movies.json?limit=30`)
            .then(resp => {
                this.setState({moviesList: resp.data.data.movies})
            })
    }

    render() {
        return (
            <div className='container row'>
                {this.state.moviesList ? (
                    this.state.moviesList.map(ele => <MovieCard data={ele} key={ele.id}/>)
                ) : (<h1 className='center'>Hang on...</h1>)}
            </div>
        )
    }
}

export default HomePage;