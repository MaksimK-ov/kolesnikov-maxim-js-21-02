import React from 'react'
import './Registration.css'
import logo from './favicon.ico'

export class Registration extends React.Component {
    render(){
        return <div className="Registration">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" width="55" height="55"/></div>
                <div className="title"><h1>Delta World</h1></div>
                <div className="users"><p><a href="users">Пользователи</a></p></div>
                <div className="posts"><p><a href="posts">Посты</a></p></div>
                <div className="enter"><p><a href="enter">Вход</a></p></div>
                <div className="reg"><p><a href="reg">Регистрация</a></p></div>
            </div>
            <div className="content">
                        <h1>Регистрация</h1>
                        <p>Имя:</p>
                        <p><input type="text" className="name" value="Введите свое имя"/></p>
                        <p>Пол:</p>
                        <div>
                            <input type="radio" id="man"
                                   name="gender" value="man"/>
                                <label htmlFor="man">Мужской</label>
                                <input type="radio" id="women"
                                       name="gender" value="women"/>
                                    <label htmlFor="women">Женский</label>
                        </div>
                        <p>Дата рождения:</p>
                        <p><input type="date" className="date" value="Введите дату рождения"/></p>
                        <p>Email:</p>
                        <p><input type="email" className="email" value="Введите адрес эл.почты"/></p>
                        <p>Номер телефона:</p>
                        <p><input type="tel" className="tel" value="Введите номер телефона"/></p>
                        <p><input type="button" className="button" value="Войти"/></p>
                        <p>Уже есть аккаунт? <a href="reg">Войти</a></p>
            </div>
            <div className="footer">
                <div className="delta">Delta World Ⓒ 1970-2077</div>
                <div className="darktheme">Темная тема</div>
                <div className="switch">
                    <input type="checkbox"/>
                    <div className="slider round"/>
                </div>
            </div>
        </div>
    }
}