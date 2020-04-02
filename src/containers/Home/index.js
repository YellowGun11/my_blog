import React, { Component } from 'react'
import './index.css'

import { get } from '../../utils/request'

// import { fetch } from 'react';

export default class Home extends Component {

    componentDidMount(){
        get('/api/user').then(res=>{
            console.log(res)
        })
    }

    render() {
        return (
            <div className="blog_home">
                <div className="blog_home_bg" />
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
