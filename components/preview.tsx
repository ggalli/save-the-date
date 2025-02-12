'use client'

import { useInvite } from '@/context/invite-context'
import { cn, formatDate } from '@/lib/utils'
import { Dancing_Script } from 'next/font/google'
import Image from 'next/image'

const dancingScript = Dancing_Script({
  weight: ['400'],
  subsets: ['latin'],
})

export function Preview() {
  const { inviteData: { date, name, place, templateUrl } } = useInvite()

  if (!templateUrl) {
    return (
      <div className="h-full shadow-lg flex flex-col justify-center items-center rounded-lg overflow-hidden p-2">
        <p className='text-lg'>Selecione um modelo de convite</p>
      </div>
    ) 
  }

  return (
    <div
      className={`
      relative h-full rounded-lg shadow-lg p-4
      bg-cover bg-center bg-no-repeat
      flex items-center justify-center text-center
    `}
    >
      <Image
        src={templateUrl || ''}
        alt={`Template`}
        fill
      />
      <div className="w-full max-w-sm z-10">
        <p className={cn(dancingScript.className, 'text-7xl leading-10 mb-6')}>
          Save
          <br />
          <span className="text-4xl">the</span>
          <br />
          Date
        </p>

        <h2 className="text-2xl mb-4">{name}</h2>
        <p className="text-xl mb-4">
          {date && formatDate(date)}
        </p>
        <p className="text-sm">{place}</p>
      </div>
    </div>
  )
}
