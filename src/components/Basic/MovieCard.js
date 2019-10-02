import React from 'react';
import { Link } from 'react-router-dom';

import DownloadLink from './DownloadLink';

const MovieCard = props => {
    return (
        <div className='col m4 s12'>
            <div className='card'>
                <div className='card-image'>
                    <img src={props.data.medium_cover_image}></img>
                </div>
                <div className='card-content'>
                    <span className='card-title flow-text activator grey-text text-darken-4'>{props.data.title}<i className="material-icons right">more_vert</i></span>
                    <p>{props.data.year}</p>
                </div>
                <div className='card-reveal'>
                     <span className='card-title flow-text grey-text text darken-4'>{props.data.title}<i className="material-icons right">close</i></span>
                     <p>{props.data.summary}</p>
                     <p className='center'><a href={`https://youtube.com/?v=${props.yt_trailer_code}`} className='waves-effect waves-light black btn-small'>Watch Trailer</a></p>
                     {props.data.torrents.map(ele => <DownloadLink data={ele} key={ele.hash} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieCard;