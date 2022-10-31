import React from 'react'

import style from './Works.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import socialImage from "../assets/social_network.jpeg"
import todolistImage from "../assets/todolist.jpg"
import reactLogo from "../assets/react_logo.svg"



const social = {
    backgroundImage: `url(${socialImage})`
}

const todolist = {
    backgroundImage: `url(${todolistImage})`
}

const reactHW = {
    backgroundImage: `url(${reactLogo})`
}



const worksState = [

    {title: "Social Network", description: "Lorem Ipsum is simply dummy t ever since the 1500s", bgImage: social, link: "#social" },
    {title: "Todolist", description: "Contrary to popular belief,  making it over 2000 years old", bgImage: todolist, link: "#todolist"},
    {title: "ReactJS HW", description: "Homework exercises made on ReactJS", bgImage: reactHW, link: "https://andreikostsen.github.io/homeworks/"},

]

export const Works = (props) => {




    return (
<div className={style.worksBlock} id={props.id}>

    <div className={`${styleContainer.container} ${style.worksContainer}`}>
       <Title text={"My Works"}/>
<p>Contrary to popular belief,  making it over 2000 years old Lorem Ipsum is simply dummy t ever since the 1500s</p>
        <div className={style.worksGrid}>
            {worksState.map(w=>(<Work title={w.title} description={w.description} style={w.bgImage} link={w.link}/>))}

        </div>
    </div>



</div>

    )


}

