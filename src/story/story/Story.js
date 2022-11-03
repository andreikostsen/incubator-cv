import style from "./Story.module.css";
import React from "react";
import parse from 'html-react-parser'


export const Story = (props) => {

return (
    <div className={style.storyWrap}>
        <div className={style.date}><span>{parse(props.period)}</span></div>
        <div className={style.position}>
            <h4>{props.position}</h4>
            <h5>{props.company}</h5>

            <p>{parse(props.description)}</p>

        </div>

    </div>
        )

}


