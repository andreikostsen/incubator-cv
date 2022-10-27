import React from 'react'

import style from './Nav.module.css';


const menuItems = ["Home", "Skills", "Portfolio", "Contacts"]


export const Nav = () => {

    return (
        <div className={style.navbar}>

            <ul className={style.nav}>

                {menuItems.map(m=><li><a href="">{m}</a></li>)}

            </ul>

        </div>

    )

}