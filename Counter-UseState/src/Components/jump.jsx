import React from 'react'

const jump = ({ onclick }) => {
  return (
    <div className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition">
      <button onClick={onclick}>Jump +5</button>
    </div>
  )
}

export default jump