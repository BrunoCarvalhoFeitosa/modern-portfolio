"use client"
import { testimonials } from "@/data"
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards"

export const HomeTestimonialsSection = () => {
    return (
        <section className="py-16 xl:py-32 w-full">
            <div className="mb-8">
                <h4 className="font-bold text-[24px] md:text-4xl text-center">
                    Opiniões dos clientes.
                </h4>
                <p className="mt-2 mx-auto w-full lg:w-[500px] text-sm text-center">
                    Ter clientes é muito importante e poder participar
                    da evolução de uma ideia e de um produto, é mais
                    importante ainda. Ao longo da minha carreira, pude criar
                    diversos projetos e as pessoas que conheci me deram muito 
                    aporte e confiança para que eu pudesse entregar o melhor resultado.
                </p>
            </div>
            <div>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    )
}