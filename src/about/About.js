import React from "react";
import style from "./About.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import bgImage from "../assets/kostsen_v.jpg";

const bg = {
    backgroundImage: `url(${bgImage})`
}



export const About = (props) => {
  return (

      <div className={style.about} id={props.id}>

          <div className={`${styleContainer.container} ${style.aboutContainer}`}>

              <div className={style.textContainer}>
                  <Title text={"About Me"} style={"left"}/>
                  <p>I am passionate about education
                      and professional networking and putting the results in practice
                      soon after I get it and encourage such an attitude to self-study in my coworkers.
                      Right now I am passing self-paced course with a mentor in Python (as a basis for further mentoring
                      in Data Science direction).
                      Never stop honing my English skills.
                  </p>
                  <p>I am passionate about education
                      and professional networking and putting the results in practice
                      soon after I get it and encourage such an attitude to self-study in my coworkers.
                      Right now I am passing self-paced course with a mentor in Python (as a basis for further mentoring
                      in Data Science direction).
                      Never stop honing my English skills.
                  </p>
              </div>


              <div className={style.photo}>
<img src={bgImage} className={style.kostenImg}/>
                  <h2>AK</h2>

              </div>
          </div>


      </div>



  )
}