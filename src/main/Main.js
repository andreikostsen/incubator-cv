import React from 'react'
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import myPhotoDesktop from "../assets/kostsen_desktop.jpg";
import myPhotoMobile from "../assets/kostsen_mobile.jpg";

export class Main extends React.Component {

    state = {
        innerWidth: window.innerWidth
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }

    resize() {
        this.setState({innerWidth: window.innerWidth})
    }

    setPhoto(innerWidth) {
        if (innerWidth <= 504) return  `url(${myPhotoMobile})`
       return `url(${myPhotoDesktop})`
    }

    render() {

        const kostsenPhoto = {
            backgroundImage: this.setPhoto(this.state.innerWidth)
        }


        return   (

            <div className={style.main} style={kostsenPhoto} id={this.props.id[0]}>

                <div className={styleContainer.container}>
                    <div className={style.banner_title}>
                        <span className={style.hi}>Hi there!</span>
                        <h1>I'm Andrei Kostsen</h1>
                        <span className={style.sub_title}>front-end developer & project manager</span>
                        <div>
                            <a href={`#${this.props.id[2]}`}>
                                <button className={style.button}>My Portfolio</button>
                            </a>
                        </div>
                    </div>
                    <div className={style.banner_item_overlay}></div>
                </div>

            </div>
        )


    }
}