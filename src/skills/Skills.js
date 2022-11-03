import React from 'react'

import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


const skillsState = [
    {title: "React", value: "65%"},
    {title: "JS", value: "78%"},
    {title: "TypeScript", value: "78%"},
    {title: "HTML5, CSS3", value: "96%"},
    {title: "English (B2)", value: "70%"},
    {title: "Photoshop", value: "70%"},

]


export const Skills = (props) => {

    return (

        <div className={style.skillsBlock} id={props.id}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <p>My soft skills: teamwork, time management, leadership, problem-solving,
                    verbal and written communication, flexibility,  quick learner, attention to detail, adaptability, self-motivation, decision making</p>
                    <div className={style.skillsGrid}>
                    {skillsState.map(s => (<Skill title={s.title} value={s.value}/>))}
                </div>
            </div>
        </div>


    )

}