import React from 'react';
import { useSelector } from 'react-redux';
import Album from '../../components/Album';

function Albums() {
    const albumsList = useSelector(state => state.AlbumsList);

    return (
        albumsList.map(album => <Album />)
    );
}

export default Albums;