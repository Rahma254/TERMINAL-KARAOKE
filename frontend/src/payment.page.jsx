import React, { useEffect, useState } from "react"

export default function PaymentPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    // Ganti ini dengan Supabase fetch kalau pakai DB
    const dummy = [
      { id: 101, nama: "Azura", status: "disetujui" },
      { id: 102, nama: "Budi", status: "menunggu" }
    ]
    setOrders(dummy)
  }, [])

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">📥 Status Pembayaran Kamu</h2>
      {orders.length === 0 ? (
        <p className="text-center text-gray-400">Belum ada pesanan.</p>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => (
            <div key={o.id} className="bg-gray-800 p-4 rounded text-white shadow">
              <p><strong>Order #{o.id}</strong></p>
              <p>Nama: {o.nama}</p>
              <p>Status: <span className={o.status === 'disetujui' ? 'text-green-400' : 'text-yellow-400'}>{o.status}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
