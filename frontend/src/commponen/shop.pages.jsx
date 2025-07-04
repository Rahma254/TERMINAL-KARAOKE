import React from "react"
import ProductCard from "../components/ProductCard"

const products = [
  { name: "Fitur Upload + Enhance", price: "Rp 15.000", id: 1 },
  { name: "Mentor AI Karaoke", price: "Rp 25.000", id: 2 },
]

export default function ShopPage() {
  const handleBuy = (product) => {
    // Redirect ke checkout manual
    localStorage.setItem("selectedProduct", JSON.stringify(product))
    window.location.href = "/checkout"
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl mb-4">🛍️ Fitur Berbayar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
        {products.map((p, i) => (
          <ProductCard key={i} name={p.name} price={p.price} onBuy={() => handleBuy(p)} />
        ))}
      </div>
    </div>
  )
}
