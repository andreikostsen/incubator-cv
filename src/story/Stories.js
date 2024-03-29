import React from 'react'
import style from "./Stories.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {Story} from "./story/Story";
const storyState = [

    {
        period: "December 2021 to Present",
        company: "IT-Incubator",
        position: "Front-End Developer Course",
        description:
            "<ul><li>TypeScript</li>" +
            "<li>JavaScript</li>" +
            "<li>React</li>" +
            "<li>React Redux</li>" +
            "<li>REST API</li>" +
            "<li>Story book</li>" +
            "<li>TDD</li>" +
            "<li>MaterialUI</li>" +
            "<li>GIT / GITHUB</li></ul>"
    },

    {
        period: "September 2018 to December 2018",
        company: "Udemy.com",
        position: "The Complete Web Developer Course 2.0",
        description:
            "<ul><li>HTML</li>" +
            "<li>CSS</li>" +
            "<li>Javascript</li>" +
            "<li>jQuery</li>" +
            "<li>CMSs and WordPress</li>" +
            "<li>Responsive Design</li>" +
            "<li>PHP Coding</li>" +
            "<li>MySQL Databases</li></ul>"
    },


    {
        period: "February 2009 to Present",
        company: "GlobalOneBel JSC",
        position: "Department director, Financial Telecommunications",
        description: "<ul><li>communication with partners (Orange Business Services, British Telecom, CISCO, Pexip, AVAYA etc)</li>" +
            "<li>communication with potential customers</li>" +
            "<li>negotiation before accepting projects, customer expectation management</li>" +
            "<li>implementation of a task control system</li>" +
            "<li>management of communication process between technical department and customers</li>" +
            "<li>creating specification for projects</li>" +
            "<li>making reports on projects</li>" +
            "<li>training of employees (prepare and deliver product and service presentations)</li>" +
            "<li>participation in marketing activities</li>" +
            "<li>developing and strengthening relationships with partners and customers at different levels</li>" +
            "<li>articulating the strategy, value proposition and solution offerings to existing customers</li></ul>"
    },

    {
        period: "October 2003 – January 2009",
        company: "GlobalOneBel JSC",
        position: "Senior account manager/account manager",
        description: "<ul><li>communication with potential and existing customers</li>" +
            "<li>provided customers with technical information and support</li>" +
            "<li>participated in tenders and exhibitions</li>" +
            "<li>created and conducted proposal presentations</li>" +
            "<li>planned new sales strategies</li></ul>"
    },

    {
        period: "2002 – 2003",
        company: "Belarusian State University of Informatics and Radioelectronics (BSUIR)",
        position: "Master’s Degree in Telecommunication Networks",
        description: ""
    },

    {
        period: "2003",
        company: "VIADEN",
        position: "HTML Coder",
        description: ""
    },

    {
        period: "1999 – 2002",
        company: "Belarusian State University of Informatics and Radioelectronics (BSUIR)",
        position: "University Degree in radioelectronics design and technology",
        description: ""
    },
    {
        period: "2001",
        company: "M&M Network",
        position: "Flash animation developer",
        description: ""
    },
    {
        period: "1999 - 2001",
        company: "Belarusian State Institute of Standardization and Certification (BelGISS)",
        position: "Web site developer",
        description: ""
    },

    {
        period: "1994 – 1999",
        company: "Minsk State High Radiotechnical College",
        position: "Engineer of radioelectronics design and technology",
        description: ""
    },



]
export const Stories = (props) => {


    return (
        <div className={style.storyBlock} id={props.id}>
            <div className={`${style.storyContainer} ${styleContainer.container}`}>
                <Title text={"My Awesome Story"} style={"left"}/>
                {storyState.map(s=>
                    <Story period={s.period}  company={s.company}  position={s.position} description={s.description} />)
                }
                </div>
         </div>
    )
}