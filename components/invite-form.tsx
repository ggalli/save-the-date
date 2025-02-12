'use client'

import { useInvite } from '@/context/invite-context'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Templates } from '@/components/templates'
import { createInvite } from '@/app/actions'
import { Label } from './ui/label'

export function InviteForm() {
  const { inviteData, updateInviteData } = useInvite()

  return (
    <div>
      <Templates />

      <form action={createInvite} className="space-y-2 mt-4">
        <div>
          <Label htmlFor="name">Nome do casal</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ex: Guilherme e Carol"
            value={inviteData.name}
            onChange={(e) => updateInviteData({ name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="date">Data do evento</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={inviteData.date}
            onChange={(e) => updateInviteData({ date: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="place">Local</Label>
          <Input
            id="place"
            name="place"
            placeholder="Ex: Eco espaço eventos - São Paulo"
            value={inviteData.place}
            onChange={(e) => updateInviteData({ place: e.target.value })}
            required
          />
        </div>

        <Button type="submit" className="w-full !mt-4">
          Criar convite
        </Button>
      </form>
    </div>
  )
}
