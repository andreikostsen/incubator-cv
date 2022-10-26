import React from 'react'

import style from './Title.module.scss'


export const Title = (props) => {

    let $titleClass = style.title


    if(props.style === "left") {

        $titleClass = style.title2

    }


    return (

        <div className={$titleClass}>
            <h2>{props.text}</h2>
        </div>


    )


}

