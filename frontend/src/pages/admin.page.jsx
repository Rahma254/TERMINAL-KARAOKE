import React, { useEffect, useState } from "react"
import AdminOrderCard from "../components/AdminOrderCard"

export default function AdminPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('/api/order/get')
      .then(res => res.json())
      .then(setOrders)
      .catch(console.error)
  }, [])

  const handleVerify = async (id) => {
    const res = await fetch('/api/order/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })

    if (res.ok) {
      setOrders(prev => prev.map(o => o.id === id ? { ...o, status: 'disetujui' } : o))
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">📦 Panel Admin: Verifikasi Order</h2>
      {orders.length === 0 ? (
        <p className="text-center text-gray-400">Tidak ada order masuk.</p>
      ) : (
        orders.map(order => (
          <AdminOrderCard key={order.id} order={order} onVerify={handleVerify} />
        ))
      )}
    </div>
  )
}
