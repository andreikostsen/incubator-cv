import React from 'react'
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

export const Footer = (props) => {

    return (
        <div className={style.footerBlock} id={props.id}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
                <h2>ANDREI KOSTSEN</h2>
                <div className={style.footerMenu}>


                    <a href="#"> <FontAwesomeIcon icon={faLinkedin} className={style.icon}/></a>
                    <a href="#"> <FontAwesomeIcon icon={faGithub} className={style.icon}/></a>
                    <a href="#"> <FontAwesomeIcon icon={faFacebook} className={style.icon}/></a>
                    <a href="#"> <FontAwesomeIcon icon={faInstagram} className={style.icon}/></a>



                </div>

                <div className={style.copyright}>© 2022 Andrei Kostsen, All Rights Reserved.</div>

            </div>

        </div>
    )

}