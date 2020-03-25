import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons';
import './index.css';
import logo from '../../assets/img/logoko.png';
import user from '../../assets/img/user.jpeg';

export default function Header(props) {

    useEffect(() => {
        window.addEventListener('scroll', handleSetVisible);
        console.log(1)
        return () => {
            console.log(11)
            window.addEventListener('scroll', handleSetVisible);
        };
    })

    const handleSetVisible = (event) => {
        //滚动条高度
        // let ctx = this;
        // let clientHeight = document.documentElement.clientHeight; //可视区域高度
        // let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        const blog_header = document.getElementsByClassName('blog_header')[0];
        const blog_header_ul = document.getElementsByClassName('blog_header_ul')[0];
        if (scrollTop > 0) {
            blog_header.style.backgroundColor = 'rgba(255,255,255,.95)';
            blog_header.style.boxShadow = '0 1px 40px -8px rgba(0,0,0,.5)';
            blog_header.style.color = '#666';
            blog_header_ul.style.visibility = "visible";
            blog_header_ul.style.transform = "translate(-80%, -50%)";
        } else {
            blog_header.style.backgroundColor = 'rgba(0,0,0,.1)';
            blog_header.style.boxShadow = '0 rgba(0,0,0,0)';
            blog_header.style.color = '#404040';
            blog_header_ul.style.visibility = "hidden";
            blog_header_ul.style.transform = "translate(-70%, -50%)";
        }
    }

    return (
        <div className="blog_header">
            <div className="blog_header_logo">
                <img src={logo} alt='YellowGun'></img>
            </div>
            <nav className="blog_header_nav">
                <ul className="blog_header_ul">
                    <li>
                        <Link to='/' exact="true"><i className="iconfont blog_header_nav_icon">&#xe6be;</i>主页</Link>
                    </li>
                    <li className='blog_header_nav_category'>
                        <Link to='/login' className="blog_header_nav_category_text"><i className="iconfont blog_header_nav_icon">&#xe64e;</i>分类</Link>
                        <ul className="blog_header_category_ul">
                            <li><Link><i className="iconfont blog_header_nav_icon">&#xe670;</i>编程</Link></li>
                            <li><Link><i className="iconfont blog_header_nav_icon">&#xe60d;</i>动漫</Link></li>
                            <li><Link><i className="iconfont blog_header_nav_icon">&#xe6bf;</i>教程</Link></li>
                            <li><Link><i className="iconfont blog_header_nav_icon">&#xe65a;</i>生活</Link></li>
                            <li><Link><i className="iconfont blog_header_nav_icon">&#xe6bd;</i>兴趣</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link><i className="iconfont blog_header_nav_icon">&#xe677;</i>关于</Link>
                    </li>
                    <li>
                        <Link><i className="iconfont blog_header_nav_icon">&#xe624;</i>写文章</Link>
                    </li>
                </ul>
            </nav>
            <div className="blog_header_login">
                {/* <div className="blog_header_login_box blog_header_login_icon_box">
                    <i className="iconfont blog_header_login_icon">&#xe727;</i>
                </div> */}
                <div className="blog_header_login_box blog_header_login_user_box">
                    <img src={user} alt='user' className="blog_header_login_user" />
                </div>
            </div>
        </div>
    )
}
