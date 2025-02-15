'use client'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image';

const items = [
    {
        image : "/images/Image1.jpg"
    },
    {
        image : "/images/Image2.jpg"
    },
    {
        image : "/images/Image3.jpg"
    }
];

export default function ImageCarousel() {
    return (
        <Carousel sx={{ minWidth: '100%', minHeight: 500 }} autoPlay>
            {
                items.map((item, i) => <Image key={i} src={item.image} alt='Kamakshi Image' width={550} height={650}/>)
            }
        </Carousel>
    )
}