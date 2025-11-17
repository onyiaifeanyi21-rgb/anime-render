import React from 'react'
import { NavLink } from 'react-router-dom'
function navbar() {
  return (
    
    function navbar() {
      return (
        <>
        <nav>
            <div className="nav-items container">
                <div className="logo">
                    <h1>MY Anime wiki</h1>
    
                </div>
                <ul>
                    <li>
                        <navlink to="/">home</navlink>
                    </li>
                      to="/"
                      <li>
                        <navlink to="/anime">anime</navlink>
                      </li>
    
                      <li>
                        <navlink to="/about">About</navlink>
                      </li>
                </ul>
    
            </div>
        </nav>
    
        </>
      )
    }
  )
}

export default navbar;