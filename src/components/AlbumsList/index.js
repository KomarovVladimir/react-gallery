import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbums } from '../../redux/slices/albumsListSlice';
import Album from '../Album';

function AlbumsList() {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums);

    useEffect(() => {
        dispatch(getAlbums());
    }, []);
    
    return (
        <div>
            {albums.items.map(album => <Album key={album.id} {...album} />)}
        </div>
    );
}

export default AlbumsList;