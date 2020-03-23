import React, { Component } from 'react'
import './index.css'
import home_bg from '../../assets/img/home_bg.jpg'

export default class Home extends Component {
    render() {
        return (
            <div className="blog_home">
                <div className="blog_home_bg">
                    <img src={home_bg} alt='' />
                </div>
                <div className="blog_home_title">
                    <h1 className="blog_home_title_text">Welocome To YellowGun11's Blog!</h1>
                </div>
                <div className="blog_home_content">
                    neiron
                </div>
            </div>
        )
    }
}
