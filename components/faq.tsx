'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'O que é a Save the date?',
    answer:
      'Save the date é um convite preliminar que anuncia a data do seu evento...',
  },
  {
    question: 'Como recebo meu convite?',
    answer:
      'Após a confirmação do pagamento, você receberá um link para download...',
  },
  {
    question: 'Consigo editar meu convite depois de criado?',
    answer:
      'Sim, você pode editar seu convite dentro das primeiras 24 horas...',
  },
  {
    question: 'Como posso entrar em contato com o suporte?',
    answer:
      'Você pode nos contatar através do email suporte@savethedate.com...',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos cartões de crédito, PIX e boleto bancário...',
  },
]

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-[#937B6E] hover:text-[#D4A373]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-[#937B6E]">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
