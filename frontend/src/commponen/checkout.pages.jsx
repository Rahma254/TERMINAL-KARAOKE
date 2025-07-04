import React, { useState, useEffect } from "react"

export default function CheckoutPage() {
  const [product, setProduct] = useState(null)
  const [buktiUrl, setBuktiUrl] = useState("")

  useEffect(() => {
    const selected = localStorage.getItem("selectedProduct")
    if (selected) setProduct(JSON.parse(selected))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nama = prompt("Masukkan nama kamu untuk admin:")

    const res = await fetch("/api/order/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nama, bukti_url: buktiUrl })
    })

    if (res.ok) {
      alert("✅ Order terkirim ke admin. Tunggu verifikasi.")
      window.location.href = "/payment"
    } else {
      alert("❌ Gagal mengirim order.")
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4 text-center">💳 Checkout Manual</h2>
      {product && (
        <>
          <p className="mb-4 text-center">
            Kamu membeli: <strong>{product.name}</strong>
          </p>
          <div className="bg-gray-900 text-white p-4 rounded mb-4 text-center">
            <p className="mb-2 font-semibold">Silakan transfer ke:</p>
            <p className="text-lg">GoPay: <strong>0895340205302</strong></p>
            <p className="text-sm text-gray-400 mt-1">a.n Admin Terminal Karaoke</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="url"
              required
              placeholder="Link bukti transfer (upload via Imgur / Supabase)"
              value={buktiUrl}
              onChange={e => setBuktiUrl(e.target.value)}
              className="p-2 rounded text-black"
            />
            <button className="bg-blue-600 text-white py-2 rounded">Kirim ke Admin</button>
          </form>
        </>
      )}
    </div>
  )
}
