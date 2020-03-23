import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    HomeOutlined,
} from '@ant-design/icons';
import './index.css'

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
        if (scrollTop > 0) {
            blog_header.style.backgroundColor = 'rgba(255,255,255,.95)';
            blog_header.style.color = '#666';
        } else {
            blog_header.style.backgroundColor = '#404040';
            blog_header.style.color = '#404040';
        }
    }

    return (
        <div className="blog_header">
            <div className="blog_header_logo">logo</div>
            <div className="blog_header_nav">
                <nav>
                    <ul className="blog_header_ul">
                        <li>
                            <Link to='/' exact="true"><HomeOutlined />主页</Link>
                        </li>
                        <li>
                            <Link to='/login'><HomeOutlined />分类</Link>
                            <ul className="blog_header_category_ul">
                                <li><Link>编程</Link></li>
                                <li><Link>动漫</Link></li>
                                <li><Link>教程</Link></li>
                                <li><Link>生活</Link></li>
                                <li><Link>兴趣</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/' exact="true"><HomeOutlined />登录</Link>
                        </li>
                        <li><Link>生活</Link></li>
                        <li><Link>兴趣</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="blog_header_login">login11111111111</div>
        </div>
    )
}
