import React from 'react'
import ZoomableImage from 'react-zoomable-image';

const MAP = () => (
        <div style={{display: 'flex', justifyContent: 'center'}}>>
         <ZoomableImage
           baseImage={{
             alt: 'An image',
             src: 'http://getschedulehelper.com/hackdavis/mapzoom.jpg',
             width: 1150,
             height: 900
           }}
           largeImage={{
             alt: 'A large image',
             src: 'http://getschedulehelper.com/hackdavis/mapzoom.jpg',
             width: 1150,
             height: 900
           }}
           thumbnailImage={{
             alt: 'A small image',
             src: 'http://getschedulehelper.com/hackdavis/mapzoom.jpg'
           }}
         />
         </div>

)

export default MAP
