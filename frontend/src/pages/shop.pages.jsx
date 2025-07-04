import React from "react"
import ProductCard from "../components/ProductCard"

const products = [
  { id: 1, name: "Paket CleanVoice", price: "Rp 10.000" },
  { id: 2, name: "Paket Deepgram", price: "Rp 20.000" },
  { id: 3, name: "Premium Karaoke AI", price: "Rp 30.000" }
]

export default function ShopPage() {
  const handleBuy = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product))
    window.location.href = "/checkout"
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">🛍️ Fitur Berbayar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(p => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            onBuy={() => handleBuy(p)}
          />
        ))}
      </div>
    </div>
  )
}
