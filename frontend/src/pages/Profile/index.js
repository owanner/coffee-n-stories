import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBack, MdAccountCircle } from 'react-icons/md'

import NavBar from '../../components/NavBar'

import './styles.css'

export default function Profile() {
    const username = localStorage.getItem('username')
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const cpf = localStorage.getItem('cpf')
    const birth = localStorage.getItem('birth')

    return (
        <div className="profile-container">
            <NavBar />
            <div className="profile-content">
                <div className="header">
                    <div className="card">
                        <div className="account">
                            <MdAccountCircle size={100} color="#9a0007" />
                            <p>{username}</p>
                        </div>
                        <div className="data">
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{cpf}</p>
                            <p>{birth}</p>
                        </div>
                        <div className="remove">
                            <p>redefinir senha</p>
                            <p>apagar conta</p>
                        </div>
                    </div>
                    <div className="button">
                        <Link className="back" to="/feed">
                            <MdArrowBack size={40} color="c49000" />
                        voltar
                    </Link>
                    </div>
                </div>
                <h1>minhas publicações</h1>
                <div class="post">
                    <h1>titulo</h1>
                    <p>resumo resumo resumo resumo</p>
                    <div className="buttons">
                        <Link to="/read">ler tudo</Link>
                        <Link to="/read">remover</Link>
                    </div>
                </div>
                <div class="post">
                    <h1>titulo</h1>
                    <p>resumo resumo resumo resumo</p>
                    <div className="buttons">
                        <Link to="/read">ler tudo</Link>
                        <Link to="/remove">remover</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}