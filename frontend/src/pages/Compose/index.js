import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
//import { Editor } from 'react-draft-wysiwyg'
//import {EditorSta} from 'draft-js'

import NavBar from '../../components/NavBar'

import api from '../../services/api'

import './styles.css'
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


export default function Compose() {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [story, setStory] = useState('')

    const history = useHistory

    const username = localStorage.getItem('username')

    async function handleNewStory(e) {
        const data = {
            title,
            genre,
            story
        }

        try {
            await api.post('stories', data, {
                headers: {
                    Authorization: username
                }
            }) 
            history.push('/feed')
        } catch (err) {
            alert('erro ao publicar, tente novamente')
        }
    }

    return (
        <div className="compose-container">
            <NavBar />
            <div className="compose-content">
                <div className="header">
                    <h1>escreva aqui sua estória</h1>
                    <Link className="back" to="/feed">
                        <MdArrowBack size={40} color="c49000" />
                        voltar
                    </Link>
                </div>

                <div className="resume">
                    <input 
                        placeholder="título" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    <select className="genre" placeholder="gênero">
                        <option value="comedia">comédia</option>
                        <option value="cronica">crônica</option>
                        <option value="novela">novela</option>
                        <option value="romance">romance</option>
                    </select>
                </div>

                <textarea 
                    className="editor" 
                    placeholder="componha..." 
                    value={story}
                    onChange={e => setStory(e.target.value)}
                    />

                <button type="submit" onClick={handleNewStory}>publicar</button>
            </div>
        </div>
    )
}