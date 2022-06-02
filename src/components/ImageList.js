import React from 'react'
import ImageCard from './ImageCard';
import'./ImageList.css'

export default function ImageList(props) {
      
    const images = props.images.map((image, idx) => {
        return <ImageCard key={idx} image={image} />
      });
    
      return <div className='image-list'>{images}</div>
}
