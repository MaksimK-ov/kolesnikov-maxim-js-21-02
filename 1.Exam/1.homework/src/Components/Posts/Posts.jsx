import React from 'react'
import {NavLink} from "react-router-dom";
import logo from "../Enter/favicon.ico";
import picture from "../Enter/users.png";
import picture2 from "../Enter/posts.png";


export class Posts extends React.Component {
    render () {
        return <div className="Posts">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" width="55" height="55"/></div>
                <div className="title"><h1>Delta World</h1></div>
                <div className="picture"><img src={picture} alt="picture" width="45" height="45"/></div>
                <div className="users"><p><a href="users">Пользователи</a></p></div>
                <div className="picture2"><img src={picture2} alt="picture2" width="55" height="45"/></div>
                <div className="posts"><p><a href="posts">Посты</a></p></div>
                <div className="enter"><p><NavLink to="exit">Выход</NavLink></p></div>
            </div>
        </div>
    }
}