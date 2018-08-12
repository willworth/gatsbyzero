import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div
    style={{
      background: 'darkgrey',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Worth Coding
        </Link>
      </h1>
      <h4>

        <Link to = "/">Home  </Link> 
        <Link to = "/blog/">Blog  </Link>
        <Link to = "/about/">About  </Link>
        
      </h4>
    </div>
  </div>
)

export default Header
