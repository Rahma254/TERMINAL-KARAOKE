src/commponents

import React from "react"

export default function PlaylistItem({ title, artist, onPlay }) {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-2 rounded mb-2">
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-400">{artist}</div>
      </div>
      <button onClick={onPlay} className="bg-blue-600 text-white px-2 py-1 rounded">Play</button>
    </div>
  )
}
