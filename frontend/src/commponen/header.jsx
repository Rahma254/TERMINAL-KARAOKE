src/commponents

import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="w-full p-4 bg-gray-900 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-white">Karaoke AI</Link>
      <nav className="flex gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}
