import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FiAlertTriangle } from 'react-icons/fi'

import { Alert, AlertDescription, AlertTitle } from '../../ui/alert'

interface IFormInput {
  name: string
  email: string
  subject: string
  text: string
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await fetch('/api/mail/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      reset() // Reset the form fields after successful submission
    }
  }

  return (
    <div>
      {isSubmitSuccessful && (
        <Alert variant="success">
          <FiAlertTriangle className="size-4" />
          <AlertTitle>E-mail enviado com sucesso!</AlertTitle>
          <AlertDescription>
            <p>Seu e-mail foi enviado com sucesso!</p>
          </AlertDescription>
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: true })}
          type="text"
          className="mt-4 w-full rounded-md border px-2 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Seu nome"
        />
        <input
          {...register('email', { required: true })}
          type="email"
          className="mt-4 w-full rounded-md border px-2 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Seu melhor e-mail"
        />
        <input
          {...register('subject', { required: true })}
          type="text"
          className="mt-4 w-full rounded-md border px-2 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Assunto"
        />
        <textarea
          {...register('text', { required: true })}
          className="mt-4 w-full rounded-md border px-2 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Sua mensagem"
        />
        <button
          type="submit"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-2 py-3 text-sm text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
          disabled={isSubmitting} // Disable the button while submitting
        >
          {isSubmitting ? (
            <div className="size-5 animate-spin rounded-full border-4 border-gray-200 border-t-red-500" />
          ) : (
            'Enviar'
          )}
        </button>
      </form>
    </div>
  )
}
