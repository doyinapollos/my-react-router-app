import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MenuItem from '../layout/MenuItem';

export default function Menu() {
    const [foods, setFoods] = useState([]);
    

    const url = 'https://ig-food-menus.herokuapp.com/our-foods'

    useEffect(() => {
        const response = axios.get(url)
        .then(response => {
           console.log(response.data)
           setFoods(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);
  
    return (
    <div className='menu'>
        <div className="menu--title">
            <div className="menu--list">
                {foods.map(food => {
                    return (
                
                        <MenuItem 
                            key = {food.id}
                            img = {food.img}
                            name = {food.name}
                            price = {food.price}
                            rate = {food.rate}
                            country = {food.country}
                        />
                        
                    )
                })}
            </div>

        </div>

    </div>
  )
}
