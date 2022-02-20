import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
        <div className='home--container'>
            <h2>Food Corner</h2>
            <p>NIGERIA RECIPES</p>
            <Link to='/menu'>
            <button>Order Now</button>
            </Link>

        </div>
    </div>
  )
}
