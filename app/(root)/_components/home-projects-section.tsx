"use client"
import { projects } from "@/data"
import Link from "next/link"
import { PinContainer } from "@/app/components/ui/pin-3d"
import { MagicButton } from "@/app/components/ui/magic-button"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export const HomeProjectsSection = () => {
    return (
        <section className="py-14 md:py-20 lg:py-32">
            <div className="mb-24">
                <h3 className="font-bold text-[24px] md:text-4xl text-center">
                    Projetos que desenvolvi.
                </h3>
                <p className="mt-2 mx-auto w-full lg:w-[500px] text-sm text-center">
                    Com mais de 6 anos de experiência como Desenvolvedor Front-end,
                    participei da  criação de muitos projetos que me possibilitaram
                    evoluir e ter uma vasta gama de conhecimentos, conhecimentos estes
                    que corroboram para a entrega de projetos consistentes e modernos 
                    como freelancer.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-y-40 md:gap-y-28 lg:gap-y-40">
                {projects.map((project) => (
                    <PinContainer
                        key={project.id}
                        title="Acessar página do projeto"
                        href={project.link}
                    >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem]">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black dark:text-slate-100">
                        {project.title}
                      </h3>
                      <div className="text-sm !m-0 !p-0 font-normal">
                        <span className="text-black dark:text-slate-500">
                          {project.description}
                        </span>
                      </div>
                      <div className="relative flex flex-1 justify-center items-center w-full rounded-lg mt-4 bg-gradient-to-br from-zinc-100 via-violet-500 to-violet-950 dark:from-black dark:via-[#111] dark:to-[#1c1c1c]" />
                    </div>
                  </PinContainer>
                ))}
            </div>
            <div className="mt-28 mx-auto px-3 flex justify-center w-full md:w-96">
                <Link
                    href="https://github.com/BrunoCarvalhoFeitosa"
                    target="_blank"
                    className="w-full"
                >
                    <MagicButton
                        title="Ver mais projetos"
                        icon={<HiOutlineArrowNarrowRight />}
                        position="right"
                        otherClasses="w-full"
                    />
                </Link>
            </div>
        </section>
    )
}