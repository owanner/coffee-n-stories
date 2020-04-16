import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
//import { Editor } from 'react-draft-wysiwyg'
//import {EditorSta} from 'draft-js'

import NavBar from '../../components/NavBar'

import './styles.css'
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


export default function Read() {
    return (
        <div className="read-container">
            <NavBar />
            <div className="read-content">
                <div className="header">
                    <div className="resume">
                        <h1>você está lendo: título do conto</h1>
                        <h1>de: autor do conto</h1>
                    </div>
                    <div className="button">
                        <Link className="back" to="/feed">
                            <MdArrowBack size={40} color="c49000" />
                        voltar
                    </Link>
                    </div>
                </div>

                <div className="reading">
                </div>
            </div>
        </div>
    )
}