'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface InviteData {
  templateUrl?: string
  name?: string
  date?: string
  place?: string
}

interface InviteContextType {
  inviteData: InviteData
  updateInviteData: (data: InviteData) => void
}

const InviteContext = createContext<InviteContextType | undefined>(undefined)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

export function InviteProvider({ children }: { children: ReactNode }) {
  const [inviteData, setInviteData] = useState<InviteData>({
    templateUrl: undefined,
    name: undefined,
    date: undefined,
    place: undefined,
  })

  const updateInviteData = (data: Partial<InviteData>) => {
    setInviteData((prev) => ({ ...prev, ...data }))
  }

  return (
    <QueryClientProvider client={queryClient}>
      <InviteContext.Provider value={{ inviteData, updateInviteData }}>
        {children}
      </InviteContext.Provider>
    </QueryClientProvider>
  )
}

export function useInvite() {
  const context = useContext(InviteContext)
  if (context === undefined) {
    throw new Error('useInvite must be used within an InviteProvider')
  }
  return context
}
