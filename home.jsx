import React from "react"

const playlist = [
  {
    title: "Janda Nakal Pencuri Suami - Nabila Ahmad",
    playback_id: "YS3dhhygPnMl6F00ea02OztJ8WZIi7pT9KfzJIrPqzoHE",
  },
  {
    title: "Secangkir Kopi dan Sepotong Roti - Nabila Ahmad",
    playback_id: "A5Qf02aZgpvj2Wcbeg5AUJj2zcr4gbMhVqcnIy6EAvew",
  },
]

const gifs = [
  "https://pjaxvrmfxmygghtsaosp.supabase.co/storage/v1/object/public/uploadkaraoke/aifaceswap-target_ca7cb53701548904c461477ac0886fdb.gif",
  "https://pjaxvrmfxmygghtsaosp.supabase.co/storage/v1/object/public/uploadkaraoke/aifaceswap-target_cafda15580bb2c89e6f33504a495cdfa.gif",
]

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🎤 Terminal Karaoke</h1>

      {/* 🔁 Playlist Lagu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {playlist.map((song, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">{song.title}</h2>
            <video
              controls
              className="rounded w-full"
              poster="https://via.placeholder.com/400x200?text=Karaoke"
            >
              <source
                src={`https://stream.mux.com/${song.playback_id}.m3u8`}
                type="application/x-mpegURL"
              />
            </video>
          </div>
        ))}
      </div>

      {/* 🎞️ Animasi */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {gifs.map((src, i) => (
          <img key={i} src={src} alt={`gif-${i}`} className="rounded shadow" />
        ))}
      </div>
    </div>
  )
}
