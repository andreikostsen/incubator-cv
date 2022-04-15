import React from 'react'

import style from './Skill.module.css';



export const Skill = (props) => {

    return (

        <div className={style.skill}>
            <div className={style.skillIcon}>icon</div>
            <h3>{props.title}</h3>
            <div className={style.skillTxt}>{props.description}</div>
        </div>
    )

}