import React, { useEffect } from 'react'
import './index.css'

export default function Header(props) {
   
    useEffect(() => {
        window.addEventListener('scroll', handleSetVisible);
        return () => {
            window.addEventListener('scroll', handleSetVisible);
        };
    })

    const handleSetVisible = (event) => {
        console.log(event)
        //滚动条高度
        // let ctx = this;
        // let clientHeight = document.documentElement.clientHeight; //可视区域高度
        // let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        const blog_header = document.getElementsByClassName('blog_header')[0];
        if(scrollTop>0){
            blog_header.style.backgroundColor ='rgba(255,255,255,.95)';
        }else{
            blog_header.style.backgroundColor='#404040';
        }
    }

    return (
        <div className="blog_header">
            头部
        </div>
    )
}
