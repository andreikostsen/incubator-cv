import React from 'react'
import clsx from "clsx";
import style from './Nav.module.css';


export const Nav = (props) => {

    return (
        <div className={style.navbar}>

            <ul className={style.nav}>

                {props.menuItems.map(m=><li><a href={`#${m}`} className={clsx(
                    style.menuLink,
                    m === props.activeId && style.menuLinkActive
                )}>{m}</a></li>)}

            </ul>

        </div>

    )

}