import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { format, formatISO, setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { UTCDate } from '@date-fns/utc'

setDefaultOptions({ locale: ptBR })

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string | number | Date) =>
  format(new UTCDate(date), 'P')

export const formatISODate = (date: string | number | Date) =>
  formatISO(date, { representation: 'date' })
