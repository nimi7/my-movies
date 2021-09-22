import React from 'react'
import { Icon } from '@iconify/react';

export default function Navbar() {
    return (
        <div className='w-full bg-black   '>

            <div className='pt-8 flex' >
                <Icon icon="si-glyph:movie-play" color="#ff4d4d" width="100" height="50" rotate={2} hFlip={true} />
                <h2 className='text-red-600 mt-6'> My Movies </h2>

            </div>



        </div>
    )
}