'use client'
import React from 'react'
import { useLocation } from 'react-router-dom'
const Body = () => {
  const location = useLocation()
  const { responseBody } = location.state || {}

  return (
    <div>
      <h2>Other Page</h2>
      <p>Response Body: {responseBody}</p>
    </div>
  )
}

export default Body
