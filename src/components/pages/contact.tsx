export function Contact() {
  return (
    <div>
      <p className="mb-4 text-gray-500">
        Pode me chamar no{' '}
        <a
          href="https://www.linkedin.com/in/pedro-paulo-brasca-trevisanuto-86136114a/"
          className="underline"
          target="_blank"
        >
          Linkedin
        </a>
      </p>

      <p className="mb-4 text-gray-500">
        Mas se preferir, pode me mandar um email (como nos velhos tempos)
      </p>

      <form>
        <input
          type="email"
          className="mt-4 w-full rounded-md border px-2 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Seu melhor e-mail"
        />
        <textarea
          className="mt-4 w-full rounded-md border px-2 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Sua mensagem"
        />
        <button className="mt-4 w-full rounded-md bg-gray-900 px-2 py-3 text-sm text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900">
          Enviar
        </button>
      </form>
    </div>
  )
}
