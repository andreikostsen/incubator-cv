import React from 'react'
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {

    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
                <h2>ANDREI KOSTSEN</h2>
                <div className={style.footerMenu}>
                    <a href="#">LinkedIn</a>
                    <a href="#">Facebook</a>
                    <a href="#">Skype</a>


                </div>

                <div className={style.copyright}>© 2022 Andrei Kostsen, All Rights Reserved.</div>

            </div>

        </div>
    )

}