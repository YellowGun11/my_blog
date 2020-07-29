import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import { actions } from "../../redux/modules/list";
import boxPic from "../../assets/img/home_bg.jpg";
import './index.css'
// import { get } from '../../utils/request'
import ListView from '../../components/ListView';

// import { fetch } from 'react';

class Home extends Component {

    componentDidMount() {
        // get('/api/user').then(res=>{
        //     console.log(res)
        // })
        this.props.fetchAllLists();
    }

    render() {
        // const data = []
        console.log(1)
        console.log(this.props.listData);
        console.log(1)
        return (
            <div className="blog_home">
                <div className="blog_home_bg" />
                <div className="blog_home_title">
                    <h1 className="blog_home_title_text">Welocome To YellowGun11's Blog!</h1>
                </div>
                <div className="blog_home_content">
                    <div className="card_box">
                        <div className="card_box_left"></div>
                        <div className="card_box_right">
                            <img src={boxPic} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        listData: state.list
    }
}

const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        ...bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)