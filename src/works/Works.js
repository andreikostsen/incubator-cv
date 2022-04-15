import React from 'react'

import style from './Works.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./Work";


const worksState = [

    {title: "HTML", description: "Lorem Ipsum is simply dummy t ever since the 1500s"},
    {title: "JS", description: "Contrary to popular belief,  making it over 2000 years old."},
    {title: "React", description: "The standard chunk of Lorem Ipsum from the 1914 translation by H. Rackham."},


]

export const Works = () => {

    return (
<div className={style.worksBlock}>

    <div className={`${styleContainer.container} ${style.worksContainer}`}>

        <h2>My Works</h2>
        <div className={style.worksGrid}>
            {worksState.map(w=>(<Work title={w.title} description={w.description}/>))}

        </div>
    </div>



</div>

    )


}

