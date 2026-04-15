import React from 'react'

const Badge = ({label, color}) => {

    const colors = {
        yellow: "bg-yellow-400/10 text-yellow-500 border-yellow-400/30",
        blue: "bg-blue-400/10 text-blue-500 border-blue-400/30",
        green: "bg-green-400/10 text-green-500 border-green-400/30",
        pink: "bg-pink-400/10 text-pink-500 border-pink-400/30"
    }

  return (
   <span className={`text-xs font-medium px-3 py-1 rounded-full border ${colors[color]}`}>{label}</span>
  )
}

export default Badge;