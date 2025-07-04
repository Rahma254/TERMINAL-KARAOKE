import React, { useState } from "react"

const laguFavorit = [
  { id: 1, title: "Janda Nakal Pencuri Suami" },
  { id: 2, title: "Secangkir Kopi dan Sepotong Roti" },
  { id: 3, title: "Love Poem" },
]

export default function VotingPage() {
  const [voted, setVoted] = useState(null)

  const handleVote = (id) => {
    setVoted(id)
    alert("✅ Suaramu sudah tercatat!")
    // TODO: Kirim ke Supabase nanti
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl mb-4">🗳️ Voting Lagu Favorit</h2>
      <div className="bg-white text-black p-4 rounded shadow max-w-md w-full">
        {laguFavorit.map(lagu => (
          <div key={lagu.id} className="flex justify-between items-center mb-2">
            <span>{lagu.title}</span>
            <button
              onClick={() => handleVote(lagu.id)}
              className={`px-3 py-1 rounded ${
                voted === lagu.id ? 'bg-green-600' : 'bg-blue-600'
              } text-white`}
              disabled={voted !== null}
            >
              {voted === lagu.id ? "✅ Voted" : "Vote"}
            </button>
          </div>
        ))}
        {voted && <p className="text-sm text-gray-500 mt-3">Kamu sudah voting. Terima kasih 🙏</p>}
      </div>
    </div>
  )
}
