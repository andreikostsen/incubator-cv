import React from 'react'

import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {

    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div><span>Hi there</span>
                <h1>I'm Andrei Kostsen</h1>
                <p>front-end developer</p>
                </div>
                <div className={style.photo}>my photo</div>
            </div>

        </div>

    )

}