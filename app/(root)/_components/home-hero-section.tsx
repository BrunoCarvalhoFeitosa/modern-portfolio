"use client"
import { Spotlight } from "@/app/components/ui/spotlight"
import { useTheme } from "next-themes"
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect"
import { MagicButton } from "@/app/components/ui/magic-button"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { IoSunny } from "react-icons/io5"
import { MdOutlineNightlightRound } from "react-icons/md"
import Link from "next/link"

export const HomeHeroSection = () => {
    const { setTheme } = useTheme()

    return (
        <section className="relative pt-36 pb-20">
            <div className="absolute top-8 right-4 flex items gap-2 z-40">
                <button
                    className="p-3 bg-violet-700 dark:bg-[#111] rounded-md text-white"
                    onClick={() => setTheme("light")}
                >
                    <IoSunny />
                </button>
                <button
                    className="p-3 bg-violet-700 dark:bg-[#111] rounded-md text-white"
                    onClick={() => setTheme("dark")}
                >
                    <MdOutlineNightlightRound />
                </button>
            </div>
            <div>
                <Spotlight className="top-10 lg:-top-8 -left-16 md:-left-24 lg:-left-36 h-screen" fill="blue" />
                <Spotlight className="top-10 lg:-top-8 lg:-left-4 -left-52 md:-left-28 h-screen" fill="blue" />
                <Spotlight className="top-10 left:8 md:-top-20 lg:-left-72 md:-left-24 h-screen" fill="blue" />
                <Spotlight className="-top-8 md:-top-56 lg:left-full w-[130dvw] lg:w-[50dvw] lg:h-[80dvh]" fill="purple" />
                <Spotlight className="top-32 lg:top-28 lg:left-[380px] w-[100dvw] lg:w-[50dvw] h-[80dvh]" fill="purple" />
                <Spotlight className="top-48 lg:top-28 lg:left-64 w-[50dvw] h-[80dvh]" fill="purple" />
            </div>
            <div className="h-[85dvh] md:h-[75dvh] lg:h-[100dvh] w-full dark:bg-black bg-white bg-grid-black/[0.05] dark:bg-grid-black/[0.8] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="relative my-20 flex justify-center z-10">
                <div className="flex flex-col justify-center items-center max-w-[89dvw] md:max-w-2xl lg:max-w-[70dvw]">
                    <div>
                        <h2 className="max-w-96 text-xs text-center uppercase tracking-widest text-black dark:text-blue-100">
                            Desenvolvedor de sites e aplicativos
                        </h2>
                    </div>
                    <div>
                        <h1>
                            <TextGenerateEffect
                                className="text-[24px] md:text-5xl xl:text-6xl uppercase text-center"
                                words="Transformando ideias em experiências reais."
                            />
                        </h1>
                    </div>
                    <div>
                        <Link
                            href="https://github.com/BrunoCarvalhoFeitosa"
                            target="_blank"
                        >
                            <MagicButton
                                title="Veja meu trabalho"
                                icon={<HiOutlineArrowNarrowRight />}
                                position="right"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}