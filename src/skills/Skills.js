import React from 'react'

import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


const skillsState = [
    {title: "HTML", value: "96%"},
    {title: "CSS", value: "87%"},
    {title: "JS", value: "78%"},
    {title: "React", value: "65%"},

]


export const Skills = () => {

    return (

        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <p>Contrary to popular belief,  making it over 2000 years old Lorem Ipsum is simply dummy t ever since the 1500s</p>
                    <div className={style.skillsGrid}>
                    {skillsState.map(s => (<Skill title={s.title} value={s.value}/>))}
                </div>
            </div>
        </div>


    )

}