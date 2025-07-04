import React from "react"

export default function AdminOrderCard({ order, onVerify }) {
  return (
    <div className="bg-white text-black p-4 rounded-xl shadow mb-4 border border-gray-300">
      <div className="font-bold text-red-600 mb-1">Order #{order.id}</div>
      <div><strong>Nama:</strong> {order.nama || "Tidak diketahui"}</div>
      <div><strong>Status:</strong> 
        <span className={`ml-2 px-2 py-1 text-xs rounded 
          ${order.status === "disetujui" ? "bg-green-200 text-green-800" :
            order.status === "ditolak" ? "bg-red-200 text-red-800" :
            "bg-yellow-200 text-yellow-800"}`}>
          {order.status}
        </span>
      </div>

      {order.bukti_url && (
        <div className="mt-2">
          <strong>Bukti Transfer:</strong><br />
          <a href={order.bukti_url} target="_blank" rel="noopener noreferrer">
            <img src={order.bukti_url} alt="Bukti" className="mt-1 w-40 rounded border" />
          </a>
        </div>
      )}

      <button
        onClick={() => onVerify(order.id)}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        disabled={order.status === "disetujui"}
      >
        {order.status === "disetujui" ? "✔️ Sudah Diverifikasi" : "Verifikasi"}
      </button>
    </div>
  )
}
