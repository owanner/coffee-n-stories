import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MdAssignmentInd } from 'react-icons/md'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.png'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory('')

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('sessions', {
                username,
                password
            })

            localStorage.setItem('username', username)
            localStorage.setItem('name', response.data.name)

            history.push('/feed')

            console.log(response.data.name)
            console.log(response.data.cpf)
        } catch(err) {
            alert('falha no login, tente novamente')
        }
    }

    return (
        <div className="login-container">

            <Link className="register" to="/register">
                <MdAssignmentInd size={40} color="#c49000" />
                    cadastre-se
            </Link>

            <img src={logoImg} alt="Coffee 'n' Stories" />

            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>faça seu login</h1>

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

                    <button type="submit">entrar</button>

                    <Link to="/forgot">
                        esqueceu a senha?
                    </Link>
                </form>
            </section>
        </div>
    )
}