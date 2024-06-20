import { useState } from 'react'

export function Contact() {
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    subject: '',
    text: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/mail/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (res.ok) {
      alert('Email sent successfully!')
    } else {
      alert('Failed to send email.')
    }
  }

  return (
    <div>
      <p className="mb-4 text-gray-500">
        Pode me chamar no{' '}
        <a
          href="https://www.linkedin.com/in/pedro-paulo-brasca-trevisanuto-86136114a/"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </p>

      <p className="mb-4 text-gray-500">
        Mas se preferir, pode me mandar um email (como nos velhos tempos)
      </p>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="mt-4 w-full rounded-md border px-2 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Seu nome"
          value={emailData.name}
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          className="mt-4 w-full rounded-md border px-2 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Seu melhor e-mail"
          value={emailData.email}
        />
        <input
          onChange={handleChange}
          type="text"
          name="subject"
          className="mt-4 w-full rounded-md border px-2 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Assunto"
          value={emailData.subject}
        />
        <textarea
          onChange={handleChange}
          name="text"
          className="mt-4 w-full rounded-md border px-2 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Sua mensagem"
          value={emailData.text}
        />
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-gray-900 px-2 py-3 text-sm text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
