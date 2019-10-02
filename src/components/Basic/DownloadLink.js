import React from 'react';

const DownloadLink = props => {
    return (
        <p className='center'><a href={props.data.url} target='_blank' className='waves-effect waves-light black btn-small'>Download {`${props.data.quality} ${props.data.type}`}<i className="material-icons left">cloud</i></a></p>
    )
}

export default DownloadLink;