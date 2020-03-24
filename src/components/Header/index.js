import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons';
import './index.css';

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
        const blog_header_nav = document.getElementsByClassName('blog_header_nav')[0];
        if (scrollTop > 0) {
            blog_header.style.backgroundColor = 'rgba(255,255,255,.95)';
            blog_header.style.boxShadow = '0 1px 40px -8px rgba(0,0,0,.5)';
            blog_header.style.color = '#666';
            blog_header_nav.style.visibility = "visible";
        } else {
            blog_header.style.backgroundColor = 'rgba(0,0,0,.1)';
            blog_header.style.boxShadow = '0 rgba(0,0,0,0)';
            blog_header.style.color = '#404040';
            blog_header_nav.style.visibility = "hidden";
        }
    }

    return (
        <div className="blog_header">
            <div className="blog_header_logo">logo</div>
            <nav className="blog_header_nav">
                <ul className="blog_header_ul">
                    <li>
                        <Link to='/' exact="true"><i className="iconfont blog_header_nav_icon">&#xe635;</i>主页</Link>
                    </li>
                    <li>
                        <Link to='/login'><i className="iconfont">&#xe64e;</i>分类</Link>
                        <ul className="blog_header_category_ul">
                            <li><Link><HomeOutlined className="blog_header_nav_icon" />编程</Link></li>
                            <li><Link><HomeOutlined className="blog_header_nav_icon" />动漫</Link></li>
                            <li><Link><HomeOutlined className="blog_header_nav_icon" />教程</Link></li>
                            <li><Link><HomeOutlined className="blog_header_nav_icon" />生活</Link></li>
                            <li><Link><HomeOutlined className="blog_header_nav_icon" />兴趣</Link></li>
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
            <div className="blog_header_login">login11111111111</div>
        </div>
    )
}
