import React, { useEffect, useState } from "react"

export default function HasilPage() {
  const [hasil, setHasil] = useState(null)

  useEffect(() => {
    // Simulasi hasil suara bersih
    const audio = localStorage.getItem("hasilSuara")
    if (audio) {
      setHasil(audio)
    }
  }, [])

  return (
    <div className="flex flex-col items-center mt-8 p-6">
      <h2 className="text-2xl mb-4">✅ Hasil Pembersihan Suara</h2>
      {hasil ? (
        <audio controls src={hasil} className="w-full max-w-md" />
      ) : (
        <p className="text-gray-400">Belum ada hasil suara.</p>
      )}
    </div>
  )
}
