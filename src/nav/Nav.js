import React from 'react'

import style from './Nav.module.css';

export const Nav = () => {

    return (
        <div className={style.navbar}>

            <ul className={style.nav}>
                <li><a href="">Home</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contacts</a></li>
            </ul>

        </div>

    )

}