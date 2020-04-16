import React from 'react'
import {Link} from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

import './styles.css'

import logoImg from '../../assets/logo.png'

export default function Login() {
    return (
        <div className="forgot-container">
            <Link className="back" to="/">
                <MdArrowBack size={40} color="c49000" />
                voltar
            </Link>

            <img src={logoImg} alt="Coffee 'n' Stories" />

            <section className="form">
                <form>
                    <h1>recupere sua senha</h1>

                    <input type="email" placeholder="digite seu email" />

                    <button type="submit">recuperar</button>
                </form>
            </section>
        </div>
    )
}