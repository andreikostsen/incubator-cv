import React from 'react'
import {Link} from 'react-router-dom';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import myPhoto from '../assets/kostsen.jpg'



export const Main = (props) => {
    const kostsenPhoto = {
        backgroundImage: `url(${myPhoto})`
    }

    return (

            <div className={style.main} style={kostsenPhoto} id={props.id[0]}>
                <div className={styleContainer.container}>
                    <div className={style.banner_title}>
                        <span className={style.hi}>Hi there!</span>
                        <h1>I'm Andrei Kostsen</h1>
                        <span className={style.sub_title}>front-end developer & project manager</span>
                        <div>
                            <a href={`#${props.id[2]}`}>
                                <button className={style.button}>My Portfolio</button>
                            </a>
                        </div>
                    </div>
                    <div className={style.banner_item_overlay}></div>
                </div>

            </div>

    )

}