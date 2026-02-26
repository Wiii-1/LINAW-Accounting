import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api")
    setArray(response.data.fruits)
    console.log(response.data.assets)
  }

  useEffect(() => {
    fetchAPI()
  }, [])
}

export default App
