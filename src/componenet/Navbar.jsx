import React from 'react'
import { NavLink } from 'react-router-dom'
    
    function Navbar() {
      return (
        <>
        <nav>
            <div className="nav-items container">
                <div className="logo">
                    <h1>MY Anime wiki</h1>
    
                </div>
                <ul>
                    <li>
                        <NavLink to="/">home</NavLink>
                    </li>
                    
                      <li>
                        <NavLink to="/anime">anime</NavLink>
                      </li>
    
                      <li>
                        <NavLink to="/about">About</NavLink>
                      </li>
                </ul>
    
            </div>
        </nav>
    
        </>
      )
    }
  


export default Navbar;