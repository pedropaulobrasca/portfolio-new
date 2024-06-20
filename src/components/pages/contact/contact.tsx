import { ContactForm } from './contact-form'

export function Contact() {
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

      <ContactForm />
    </div>
  )
}
