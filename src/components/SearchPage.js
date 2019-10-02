import React from 'react';
import axios from 'axios';

import MovieCard from './Basic/MovieCard';

const BASE_URL = 'https://yts.lt/api/v2/'

class SearchPage extends React.Component {
    constructor() {
        super();
        this.state = {
            moviesList: '',
            inputVal: ''
        }
    }

    handleInput = e => {
        e.preventDefault();
        this.setState({inputVal: e.target.value})
    }

    searchMovies = e => {
        e.preventDefault();
        axios(`${BASE_URL}/list_movies.json?query_term=${this.state.inputVal}`)
            .then(resp => {
                this.setState({moviesList: resp.data.data.movies})
            })
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={(e) => this.searchMovies(e)} style={{marginTop: '25px'}}>
                    <div className='row'>
                        <input placeholder='Enter Your Query' type='text' style={{margin: 0}} className='col m12' value={this.inputVal} onChange={e => this.handleInput(e)}></input>
                        <button className="btn waves-effect waves-light col m6 offset-m3 s12" type="submit" style={{marginTop: '10px'}}>Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>  
                </form>
                <div className='row'>
                    {this.state.moviesList ? (
                        this.state.moviesList.map(ele => <MovieCard data={ele} />)
                    ) : (<></>)}
                </div>
            </div>
        )
    }
}

export default SearchPage;