import React from 'react'


import styleContainer from '../common/styles/Container.module.css'
import style from "./Contact.module.css"

export const Contacts = () => {

    return (

        <div className={style.contactBlock}>
            <div className={`${style.contactContainer} ${styleContainer.container}`}>
                <h2>Contact</h2>
                <form>

                    <input type="text" value="Name" className={style.inputStyle}/>
                    <input type="email" value="E-mail" className={style.inputStyle}/>
                                               <textarea rows="10" cols="45" name="text" className={style.inputStyle}>
                                    Your message
                            </textarea>


                        <button className={style.sendButton}>Send message</button>


                </form>
            </div>


        </div>
    )


}