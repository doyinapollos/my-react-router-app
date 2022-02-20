import React from 'react'

export default function MenuItem(props) {
  return (
    <div className='menu--item'>
        <div className="menu--item--container">
            <img className='menu--item--img' src= {props.img} alt='' /> <br />
            <span>{props.name}</span><br />
            <span>{props.dsc}</span><br />
            <span>{props.price}</span><br />
            <span>{props.rate}</span><br />
            <span>{props.country}</span>
        </div>

    </div>
  )
}
