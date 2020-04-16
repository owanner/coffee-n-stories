import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.png'

export default function Register() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [birth, setBirth] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassowrd] = useState('')

    const history = useHistory()

    function handleRegister(e) {
        e.preventDefault()

        const data = {
            name,
            cpf,
            birth,
            email,
            username,
            password,
            cpassword
        }

        if (password === cpassword) {
            api.post('users', data)

            history.push('/')
        } else {
            alert('senhas não batem')
            console.log('senhas não batem')
        }        
    }

    return (
        <div className="register-container">
                <Link className="back" to="/">
                    <MdArrowBack size={40} color="c49000" />
                    voltar
                </Link>
                
                <img src={logoImg} alt="Coffee 'n' Stories" />

            <section className="form">
                <form onSubmit={handleRegister}>
                    <h1>faça seu cadastro</h1>

                    <input 
                        placeholder="nome completo"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    <input 
                        placeholder="cpf"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        />
                    <div class="birth">
                        <p>data de nascimento</p>
                        <input 
                            type="date" 
                            placeholder="data de nascimento"
                            value={birth}
                            onChange={e => setBirth(e.target.value)}
                            />
                    </div>
                    <intput 
                        type="email" 
                        placeholder="e-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    <input 
                        placeholder="username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        />
                    <input 
                        type="password" 
                        placeholder="senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    <input 
                        type="password" 
                        placeholder="confirmar senha"
                        value={cpassword}
                        onChange={e => setCpassowrd(e.target.value)}
                        />

                    <button type="submit">cadastrar</button>
                </form>
            </section>
        </div>
    )
}