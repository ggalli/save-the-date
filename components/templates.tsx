'use client'

import { useInvite } from '@/context/invite-context'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase.config'

export function Templates() {
  const { inviteData, updateInviteData } = useInvite()

  const { data } = useQuery({
    queryKey: ['templates'],
    queryFn: async () => {
      const { data } = await supabase.storage
        .from('save the date')
        .list('templates')

      return data
    },
  })

  const templateURLs =
    data?.map(
      (file) =>
        supabase.storage
          .from('save the date')
          .getPublicUrl(`templates/${file.name}`).data.publicUrl,
    ) || []

  return (
    <div className="grid grid-cols-3 gap-4">
      {templateURLs.map((url, index) => (
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
