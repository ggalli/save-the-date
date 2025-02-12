'use client'

import { useInvite } from '@/context/invite-context'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const templates = [
  'https://buydjdeppyalzjlxouiw.supabase.co/storage/v1/object/public/save%20the%20date/templates/template1.jpg',
  'https://buydjdeppyalzjlxouiw.supabase.co/storage/v1/object/public/save%20the%20date/templates/template2.jpg',
  'https://buydjdeppyalzjlxouiw.supabase.co/storage/v1/object/public/save%20the%20date/templates/template3.jpg',
]

export function Templates() {
  const { inviteData, updateInviteData } = useInvite()

  return (
    <div className="grid grid-cols-3 gap-4">
      {templates.map((url, index) => (
        <Card
          key={index}
          className={`relative w-40 h-56 cursor-pointer transition-all overflow-hidden ${
            inviteData.templateUrl === url ? 'ring-2 ring-[#D4A373]' : ''
          }`}
          onClick={() => updateInviteData({ templateUrl: url })}
        >
          <Image src={url} alt={`Template`} fill />
        </Card>
      ))}
    </div>
  )
}
