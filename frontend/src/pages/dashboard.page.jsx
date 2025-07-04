import React, { useState, useEffect } from "react"

export default function DashboardPage() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    // Dummy data, nanti bisa diganti fetch dari Supabase
    const dummyStats = {
      totalSongs: 12,
      songsUploaded: 3,
      votesCast: 5,
      lastActive: "2025-07-04"
    }

    setStats(dummyStats)
  }, [])

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">📊 Dashboard Pengguna</h2>

      {stats ? (
        <div className="bg-gray-800 p-4 rounded text-white shadow space-y-2">
          <p>Total Lagu di Playlist: <strong>{stats.totalSongs}</strong></p>
          <p>Lagu yang Kamu Upload: <strong>{stats.songsUploaded}</strong></p>
          <p>Voting yang Kamu Lakukan: <strong>{stats.votesCast}</strong></p>
          <p>Aktivitas Terakhir: <strong>{stats.lastActive}</strong></p>
        </div>
      ) : (
        <p className="text-gray-400 text-center">Memuat statistik...</p>
      )}
    </div>
  )
}
