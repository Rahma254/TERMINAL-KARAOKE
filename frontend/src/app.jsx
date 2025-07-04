src/app/jsx

import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login.page.jsx"
import HomePage from "./pages/home.page.jsx"
import UploadPage from "./pages/upload.page.jsx"
import HasilPage from "./pages/hasil.page.jsx"
import MentorPage from "./pages/mentor.page.jsx"
import DashboardPage from "./pages/dashboard.page.jsx"
import ShopPage from "./pages/shop.page.jsx"
import CheckoutPage from "./pages/checkout.page.jsx"
import PaymentPage from "./pages/payment.page.jsx"
import AdminPage from "./pages/admin.page.jsx"
import VotingPage from "./pages/voting.page.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/hasil" element={<HasilPage />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/voting" element={<VotingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
