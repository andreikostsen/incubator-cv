import React from 'react'

import style from './Skill.module.css';


export const Skill = (props) => {

    const progress = {
        width: props.value,
    }

    return (

      <div className={style.skillWrap}>
            <div className={style.skillInfo}>
                <div className={style.skillName}>{props.title}</div>
                <div className={style.skillValue}>{props.value}</div>
            </div>
            <div className={style.skill}>
                <div className={style.skillHolder}>
                    <div className={style.skillBar} style={progress}></div>
                </div>
        </div>

      </div>
    )

}