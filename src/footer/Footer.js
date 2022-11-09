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


                    <a href="https://www.linkedin.com/mwlite/in/andrei-kostsen-9699b1a1"> <FontAwesomeIcon icon={faLinkedin} className={style.icon}/></a>
                    <a href="https://github.com/andreikostsen/"> <FontAwesomeIcon icon={faGithub} className={style.icon}/></a>
                    <a href="https://www.facebook.com/andrzej.kascien"> <FontAwesomeIcon icon={faFacebook} className={style.icon}/></a>
                    <a href="https://www.instagram.com/andrzej_kascien"> <FontAwesomeIcon icon={faInstagram} className={style.icon}/></a>



                </div>

                <div className={style.copyright}>© 2022 Andrei Kostsen</div>

            </div>

        </div>
    )

}