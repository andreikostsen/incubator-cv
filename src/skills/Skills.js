import React from 'react'

import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill";


const skillsState = [
    {title: "HTML", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "JS", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {title: "React", description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."},
]


export const Skills = () => {

    return (

        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>skills</h2>
                <div className={style.skillsGrid}>
                    {skillsState.map(s => (<Skill title={s.title} description={s.description}/>))}
                </div>
            </div>
        </div>


    )

}