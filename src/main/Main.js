import React from 'react'

import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import myPhoto from '../assets/kostsen.jpg'
import myPhoto2 from '../assets/kostsen3.jpg'



export const Main = () => {


    const kostsenPhoto = {
        backgroundImage: `url(${myPhoto})`
    }
    const kostsenPhoto1 = {
        backgroundImage: `url(${myPhoto2})`
    }

    return (
        <div className={style.main} style={kostsenPhoto1}>
            <div className={styleContainer.container} >


                <div className={style.banner_title}>
                    <span className={style.hi}>Hi there!</span>
                    <h1>I'm Andrei Kostsen</h1>
                    <span className={style.hi}>front-end developer</span>
                    <div><button className={style.button}>My Portfolio</button></div>
                </div>
                <div className={style.banner_item_overlay}></div>


                {/*<div className={style.photo} style={kostsenPhoto}>my photo</div>*/}
            </div>

        </div>

    )

}