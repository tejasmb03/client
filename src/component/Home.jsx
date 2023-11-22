import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../apiHandler/api';


function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    },[setTodos]);

    const fetchTodos = async () => {
        try {
            const data = await getAllTodos();
            setTodos(data);
        } catch (error) {
            
        }
    }
  return (
    <div>Home</div>
  )
}

export default Home