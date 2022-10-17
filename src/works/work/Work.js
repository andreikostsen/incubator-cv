import React from 'react'

import style from './Work.module.scss'



export const Work = (props) => {

    return (
        <div className={style.work}>
            <div className={style.imgBlock} style={props.style}>
                <a className={style.button} href={props.link}>Open</a>
            </div>

            <h3 className={style.work_item_title}>{props.title}</h3>
            <div className={style.description}>{props.description}</div>

        </div>



    )


}