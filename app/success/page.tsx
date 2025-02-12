import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Success() {
  return (
    <main className="min-h-screen bg-[#FDF8F6]">
      <div className="container px-4 py-12 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-[#95B885] rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-serif text-[#95B885] mb-4">
            Obrigado pela compra!
          </h1>
        </div>

        <div className="mb-8">
          <p className="text-[#937B6E] mb-8">
            Agora é só enviar o seu Save the date para todos os seus convidados
            e esperar ansiosamente pelo dia do evento.
          </p>
          <p className="text-[#937B6E] mb-4">
            Clique na imagem para fazer o download ou compartilhe o link abaixo.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              value="https://link-do-site.com"
              readOnly
              className="bg-white"
            />
            <Button variant="outline">Copiar</Button>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Image
            src="/placeholder.svg?height=600&width=400"
            alt="Your Save the Date"
            width={400}
            height={600}
            className="w-full h-auto cursor-pointer"
          />
        </div>
      </div>
    </main>
  )
}
