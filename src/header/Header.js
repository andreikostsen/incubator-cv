import React from 'react'

import style from './Header.module.css';
import {Nav} from "../nav/Nav";


export const Header = (props) => {

    return (
        <div className={style.header}>
            <div className={style.container}>
                <Nav menuItems={props.menuItems} activeId={props.activeId}/>

            </div>
        </div>

    )

}