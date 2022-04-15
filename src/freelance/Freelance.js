import React from 'react'

import style from './Freelance.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Freelance = () => {

    return (
        <div className={style.freelanceBlock}>

            <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
                <h2>I Am Available For Freelancer</h2>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    )

}