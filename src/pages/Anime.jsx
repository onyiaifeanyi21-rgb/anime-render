import React from 'react'
import topAnime from '../Data/animedata'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Anime() {
  const [anime, setAnimeFave] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const findAnime=()=>{
      setAnimeFave(topAnime)
    };
    findAnime();
  },[])
  return (
    <div className='container'>
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className="title">
        <h2>Pop Anime</h2>
      </div>
      <div className="anime-container">
        {
          anime.map((anime) => (
            <div className="anime-card">
              <img src={anime.img} alt="anime-image" />
              <div className="anime-info">
                <div className="content-text">
                  <h3 className="anime-name">
                    {anime.name}
                    <br />
                    <span className="info">{anime.shortinfo}</span><br />
                    
                  </h3>
                </div>
                <Link to={`/anime/${anime.slug}`}>
                    <div className="btn">Read</div>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Anime;