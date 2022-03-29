import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        const fetchRecipes = async () => {
            const { data } = axios.get('/api/recipes')
            setRecipes(data)
        }

        fetchRecipes();
    }, [])
  return (
    <div>Home</div>
  )
}

export default Home