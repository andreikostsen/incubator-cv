import React from 'react'
import style from "../story/Story.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Story = () => {

    return (

        <div className={style.storyBlock}>
            <div className={`${style.storyContainer} ${styleContainer.container}`}>

                <Title text={"My Awesome Story"}/>
                <div className={style.storyWrap}>
                    <div>December 2010 to Present</div>
                    <div >
                        <h4>ewef</h4>
                        <h5>wefwefwef</h5>
                        <p>He lost his bottle squiffy bog bleeding hunky-dory wind up morish tomfoolery spend a penny hanky panky, lemon squeezy vagabond up the kyver fantastic cheeky.!</p>

                    </div>

                </div>



            </div>

        </div>





    )
}