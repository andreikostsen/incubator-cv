import React from 'react'

import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import myPhoto from '../assets/kostsen3.jpg'



export const Main = (props) => {
    const kostsenPhoto = {
        backgroundImage: `url(${myPhoto})`
    }

    return (
        <div className={style.main} style={kostsenPhoto} id={props.id}>
            <div className={styleContainer.container}>
                <div className={style.banner_title}>
                    <span className={style.hi}>Hi there!</span>
                    <h1>I'm Andrei Kostsen</h1>
                    <span className={style.sub_title}>front-end developer & project manager</span>
                    <div><button className={style.button}>My Portfolio</button></div>
                </div>
                <div className={style.banner_item_overlay}></div>
            </div>

        </div>

    )

}