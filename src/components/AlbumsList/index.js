import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestAlbums } from '../../redux/slices/albumsListSlice';
// import Album from '../Album';

function AlbumsList() {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums);

    useEffect(() => {
        dispatch(requestAlbums());
    }, []);
    
    return (
        <div>
            {/* {albums.items.map(album => <Album {...album} />)} */}
        </div>
    );
}

export default AlbumsList;