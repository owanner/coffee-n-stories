import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from '../../services/api'

import "./styles.css";

import NavBar from "../../components/NavBar"

//import Carousel from "../../components/Carousel"

export default function Feed() {
  const [stories, setStories] = useState([])
  const username = localStorage.getItem('username')

  useEffect(() => {
    api.get('stories', {
      headers: {
        Authorization: username
      }
    }).then(response => {
      setStories(response.data)
    })
  }, [username])

  return (
    <div className="feed-container">
      <NavBar />
      <div className="feed-content">
        <div className="header">
          <h1>contos</h1>
          <select className="genre" placeholder="gênero">
            <option value="comedia">comédia</option>
            <option value="cronica">crônica</option>
            <option value="novela">novela</option>
            <option value="romance">romance</option>
          </select>
        </div>
        {stories.map(story => (
          <div class="post" key={story.id}>
            <h1>{story.title}</h1>
            <p>{story.summary}</p>
            <Link to="/read">ler tudo</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
