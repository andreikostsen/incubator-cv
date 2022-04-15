import React from 'react'

import style from './Header.module.css';
import {Nav} from "../nav/Nav";
// import {Main} from "../main/Main";

export const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.container}>
                <Nav/>

            </div>
        </div>

    )

}