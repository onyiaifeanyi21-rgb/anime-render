import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import topAnime from '../Data/animedata'

function AnimeDetails() {
  const [myAnime, setMyAnime] = useState(null);
  const navigate = useNavigate();
const {slug} = useParams();
  useEffect(() => {
    const fetchMyAnime = () => {
        const animeCollection = topAnime.find((q) => q.slug === slug);
        setMyAnime(animeCollection || null);
    }
    fetchMyAnime();
  }, [slug]);

  if(!myAnime) {
    return(
      <div className="container">
        <button className="btn" onClick={() => navigate(-1)}>Go back</button>
        <p>No anime collection</p>
      </div>
    )
  }

  return (
    <div className='container'>
      <button className="btn" onClick={() => navigate(-1)}>Go back</button>

      <div>
        <div className="title">
          <h1>top anime name</h1>
        </div>
        <div className="flex-container">
          {
            myAnime.img && (
              <img src={myAnime.img} alt="" className='anime-img'/>
            )
          }
          <div className="anime-infos">
            <div className="row">
              <h3 className="label">Anime name</h3>
              <p className="text">{myAnime.name}</p>
            </div>
            <div className="row">
              <h3 className="label">Anime name</h3>
              <p className="text">{myAnime.desc}</p>
            </div>
            <div className="row">
              <h3 className="label">Anime name</h3>
              <p className="text">{myAnime.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeDetails