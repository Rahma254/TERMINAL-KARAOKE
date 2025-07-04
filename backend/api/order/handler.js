import { supabase } from '../../config/supabase.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { nama, bukti_url } = req.body

  const { error } = await supabase.from('pending_orders').insert({
    nama,
    bukti_url,
    status: "menunggu",
  })

  if (error) return res.status(500).json({ error: error.message })

  return res.status(200).json({ success: true })
}
