import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbums } from '../../redux/slices/gallerySlice';
import Album from '../Album';
import gridStyles from '../../scss/grid.module.scss';

function AlbumsList() {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums);

    useEffect(() => {
        dispatch(getAlbums());
    }, []);
    
    return (
        <div className={gridStyles.gallery}>
            {albums.items.map(album => <Album key={album.id} {...album} />)}
        </div>
    );
}

export default AlbumsList;