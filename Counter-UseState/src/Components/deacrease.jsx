import React from 'react'

const deacrease = ({ onclick }) => {
  return (
    <div className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition">
      <button onClick={onclick}>Deacresae</button>
    </div>
  )
}

export default deacrease