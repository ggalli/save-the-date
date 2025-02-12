'use server'

import { redirect } from 'next/navigation'

export async function createInvite(formData: FormData) {
  const title = formData.get('title') as string
  const date = formData.get('date') as string
  const message = formData.get('message') as string

  // Here you would:
  // 1. Get the template ID from the context (you'll need to pass it in the form)
  // 2. Generate the invitation image
  // 3. Save to database
  // 4. Handle payment

  // For now, we'll just redirect to the success page
  redirect('/success')
}
