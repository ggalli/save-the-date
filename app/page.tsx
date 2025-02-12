import { Preview } from '@/components/preview'
import { Faq } from '@/components/faq' // Import the Faq component
import { InviteProvider } from '@/context/invite-context'
import { InviteForm } from '@/components/invite-form'
import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <InviteProvider>
      <main className="min-h-screen bg-[#FDF8F6]">
        <div className="container px-4 py-12">
          {/* Header */}
          <header className="text-center">
            <h1 className="text-8xl text-secondary font-title mb-4">
              Save the Date
            </h1>
            <p className="text-2xl mb-8">
              Crie o seu convite personalizado em minutos e torne seu evento
              inesquecível.
            </p>
          </header>

          {/* Main Content */}
          <div className="flex gap-12 mb-16">
            <div className="w-3/5">
              <InviteForm />
            </div>
            <div className="w-2/5">
              <Preview />
            </div>
          </div>

          {/* How it Works */}
          <section className="mb-16">
            <h2 className="text-4xl font-medium text-center mb-12">
              Como funciona?
            </h2>

            <div className="flex gap-8">
              <div className="text-center w-64">
                <p className="text-6xl text-secondary mb-2">1</p>
                <p className="text-xl">Selecione um template.</p>
              </div>

              <ChevronRight size={64} className="stroke-primary" />

              <div className="text-center w-64">
                <p className="text-6xl text-secondary mb-2">2</p>
                <p className="text-xl">Preencha os dados.</p>
              </div>

              <ChevronRight size={64} className="stroke-primary" />

              <div className="text-center w-64">
                <p className="text-6xl text-secondary mb-2">3</p>
                <p className="text-xl">
                  Faça o download ou copie o link do seu convite.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-4xl font-medium text-center mb-12">
              Perguntas Frequentes
            </h2>
            <Faq />
          </section>
        </div>
      </main>
    </InviteProvider>
  )
}
