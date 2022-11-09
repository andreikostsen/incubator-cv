import React from 'react'

import style from './Works.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import socialImage from "../assets/social_network.jpeg"
import todolistImage from "../assets/todolist.jpg"
import reactLogo from "../assets/react_logo.svg"
import cinemariumImage from "../assets/cinemarium.png"
import adevisImage from "../assets/adevis.png"
import rrcImage from "../assets/rrc.png"


const social = {
    backgroundImage: `url(${socialImage})`
}

const todolist = {
    backgroundImage: `url(${todolistImage})`
}

const reactHW = {
    backgroundImage: `url(${reactLogo})`
}

const cinemarium = {
    backgroundImage: `url(${cinemariumImage})`
}
const adevis = {
    backgroundImage: `url(${adevisImage})`
}
const rrc = {
    backgroundImage: `url(${rrcImage})`
}



const worksState = [
    {title: "ReactJS HW", description: "Homework exercises made on ReactJS", bgImage: reactHW, link: "https://andreikostsen.github.io/homeworks/", buttonTitle: "Open"},
    {title: "Social Network", description: "The project on React&Typescript", bgImage: social, link: "#social", buttonTitle: "Coming Soon.." },
    {title: "Todolist", description: "The main App created during IT-Incubator course", bgImage: todolist, link: "#todolist", buttonTitle: "Coming Soon.."},
    {title: "Cinemarium", description: "Official web-site of fulldome immersive cinema ", bgImage: cinemarium, link: "https://cinemarium.by/", buttonTitle: "Open"},
    {title: "Adevis", description: "Сeiling and wall acoustic panels catalogue ", bgImage: adevis, link: "https://adevis.by/", buttonTitle: "Open"},
    {title: "RRC", description: "Telecom equipment and software distributor web-site", bgImage: rrc, link: "https://rrc.by/", buttonTitle: "Open"},


]

export const Works = (props) => {




    return (
<div className={style.worksBlock} id={props.id}>

    <div className={`${styleContainer.container} ${style.worksContainer}`}>
       <Title text={"My Works"}/>
<p>Here you can see my projects created during IT-Incubator course as well on freelance over the last couple of years</p>
        <div className={style.worksGrid}>
            {worksState.map(w=>(<Work title={w.title} description={w.description} style={w.bgImage} link={w.link} buttonTitle={w.buttonTitle}/>))}

        </div>
    </div>



</div>

    )


}

