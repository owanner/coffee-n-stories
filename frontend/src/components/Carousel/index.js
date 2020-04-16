import React from "react"
import { Link } from 'react-router-dom'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

import "./styles.css";

export default function Carousel() {
    return (
        <div className="carousel-container">
            <MdArrowBack size={40} color="#c49000"/>
            <div className="book">
                <Link to="/read"> nome do livro </Link>
            </div>
            <div className="book">
                <Link to="/read"> nome do livro </Link>
            </div>
            <div className="book">
                <Link to="/read"> nome do livro </Link>
            </div>
            <div className="book">
                <Link to="/read"> nome do livro </Link>
            </div>
            <div className="book">
                <Link to="/read"> nome do livro </Link>
            </div>
            <MdArrowForward size={40} color="#c49000"/>
        </div>
    )
}