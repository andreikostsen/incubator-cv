import React from 'react'

import style from './Freelance.module.css'
import styleContainer from '../common/styles/Container.module.css'
import bgImage from "../assets/shape.png";


const bg = {
    backgroundImage: `url(${bgImage})`
}


export const Freelance = () => {

    return (
        <div className={style.freelanceBlock} style={bg}>
            <div className={style.overlay}> </div>
                <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
                    <h2><span>I'm Available</span><br />For Freelancing</h2>
                    <a href="#Contacts" ><button className={style.button}>Hire me</button></a>
                </div>



        </div>
    )

}