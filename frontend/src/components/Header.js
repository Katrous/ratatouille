import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
         <h1 className="margin-top-small">Ratatoille</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link className="header-link" to="/Reservations">Reservations</Link> |{" "}
        <Link className="header-link" to="/Recipes">Menu Items</Link>
        
      </nav>
    </div>
  )
}

export default Header