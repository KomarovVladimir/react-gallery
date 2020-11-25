import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../../components/Image';

function Images() {
    const imagesList = useSelector(state => state.ImagesList);

    return (
        imagesList.map(album => <Image />)
    );
}

export default Images;