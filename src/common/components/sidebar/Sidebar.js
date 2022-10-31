import React from "react";
import {slide as Menu } from "react-burger-menu";


export const Sidebar= (props) => {
    return (

        // Pass on our props
        <Menu {...props}>

            {props.menuItems.map(m=> <a className="menu-item" href={`#${m}`}>
                    {m}
                </a>



            )}

        </Menu>

    );
};


