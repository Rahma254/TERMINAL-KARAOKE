import React, { useState } from "react"

export default function MentorPage() {
  const [input, setInput] = useState("")
  const [chat, setChat] = useState([])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setChat(prev => [...prev, userMessage])

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [...chat, userMessage],
      })
    })

    const data = await res.json()
    const reply = data.choices[0].message

    setChat(prev => [...prev, reply])
    setInput("")
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">🎙️ Mentor AI Karaoke</h2>
      <div className="bg-gray-800 text-white p-4 rounded h-96 overflow-y-auto mb-4">
        {chat.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left text-green-400'}`}>
            <p><strong>{msg.role === 'user' ? 'Kamu' : 'Mentor'}:</strong> {msg.content}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 p-2 rounded text-black"
          placeholder="Tanya mentor karaoke..."
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded">Kirim</button>
      </div>
    </div>
  )
}
