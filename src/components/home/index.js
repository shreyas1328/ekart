import React from 'react'
import Tile from './comps/tile';
import '../../styles/home.scss';
import HomeData from '../data/homeData.json'

export default function Home() {

    console.log(HomeData);

    return (
        <div className='home-container' >
            <div className='home-wrapper' >
                {HomeData.map((val, index) => <Tile data={val} key={index} />)}
            </div>
        </div>
    )
}
