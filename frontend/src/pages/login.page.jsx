import React, { useState } from "react"
import { sendMagicLink } from "../config/auth"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setMessage("")

    try {
      const { error } = await sendMagicLink(email)
      if (error) throw error
      setMessage("✅ Cek email kamu untuk login!")
    } catch (err) {
      setError("❌ Gagal kirim link: " + err.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-4">Login via Email</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
        <input
          type="email"
          placeholder="Email kamu"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="p-2 rounded"
        />
        <button className="bg-blue-600 text-white py-2 rounded">Kirim Magic Link</button>
        {message && <p className="text-green-400">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  )
}
