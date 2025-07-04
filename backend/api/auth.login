// ✅ FILE: backend/api/auth/login.js

import { supabase } from '../../config/supabase.js'

export default async function handler(req, res) { if (req.method !== 'POST') return res.status(405).end()

const { email } = req.body

if (!email) { return res.status(400).json({ message: 'Email wajib diisi' }) }

const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: 'https://terminal-karaoke.vercel.app/home', // Ganti sesuai project kamu }, })

if (error) { return res.status(500).json({ message: 'Gagal mengirim magic link', detail: error.message }) }

return res.status(200).json({ message: '✅ Magic link telah dikirim ke email kamu.' }) }
