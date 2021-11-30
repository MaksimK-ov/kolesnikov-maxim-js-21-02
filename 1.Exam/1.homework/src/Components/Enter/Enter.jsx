import React from 'react'
import './Enter.css'
import logo from './favicon.ico'
import picture from './users.png'
import picture2 from './posts.png'
import {NavLink} from "react-router-dom";

export class Enter extends React.Component {

    render () {
        return <div className="Enter">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" width="55" height="55"/></div>
                <div className="title"><h1>Delta World</h1></div>
                <div className="picture"><img src={picture} alt="picture" width="45" height="45"/></div>
                    <div className="users"><p><NavLink to="users">Пользователи</NavLink></p></div>
                <div className="picture2"><img src={picture2} alt="picture2" width="55" height="45"/></div>
                <div className="posts"><p><a href="posts">Посты</a></p></div>
                <div className="enter"><p><a href="enter">Вход</a></p></div>
                <div className="reg"><p><NavLink to={'/Registration'}>Регистрация</NavLink></p></div>
            </div>
            <div className="content">
                        <h1>Вход</h1>
                        <p>ID:</p>
                        <p><input type="id" className="id" value="Введите свой id"/></p>
                        <input type="button" className="button" value="Войти"/>
                        <p>Еще нет аккаунта? <NavLink to={'/Registration'}>Зарегистрироваться</NavLink></p>
            </div>
            <div className="footer">
                    <div className="delta">Delta World Ⓒ 1970-2077</div>
                    <div className="darktheme">Темная тема</div>
                        <label className="switch">
                            <input type="checkbox"/>
                            <div className="slider round"></div>
                        </label>
            </div>
        </div>
    }
}
