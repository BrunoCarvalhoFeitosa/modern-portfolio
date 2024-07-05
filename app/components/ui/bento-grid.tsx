"use client"
import { useState } from "react"
import Lottie from "react-lottie"
import animationData from "@/data/confetti.json"
import { techStackOne, techStackTwo } from "@/data"
import { cn } from "@/utils/cn"
import { BackgroundGradientAnimation } from "./gradient-bg"
import { GridGlobe } from "./grid-globe"
import { MagicButton } from "./magic-button"
import { IoCopyOutline } from "react-icons/io5"

export const BentoGrid = ({ className, children }: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string
  id?: number
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = () => {
    setCopied(!copied)
    navigator.clipboard.writeText("https://br.linkedin.com/in/bruno-carvalho-feitosa")
    setTimeout(() => {
        window.open('https://br.linkedin.com/in/bruno-carvalho-feitosa', '_blank')
        setCopied(false)
    }, 2000)
  }

  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4 bg-[#38238F] dark:bg-[#080808] overflow-hidden",
        className
      )}
      style={{
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
      }}
    >
        <div className={`${id === 6 && "flex justify-center h-full"}`}>
            <div className="w-full h-full absolute top-0 left-0">
                {img && (
                    <img
                        src={img}
                        alt={img}
                        className={cn(imgClassName, "object-cover object-center")}
                    /> 
                )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
                {spareImg && (
                    <img
                        src={spareImg}
                        alt={spareImg}
                        className="w-full h-full object-cover object-center"
                    />
                )}
            </div>
            {id === 6 && (
                <BackgroundGradientAnimation>
                    <div className="absolute flex justify-center items-center text-white font-bold z-50" />
                </BackgroundGradientAnimation>
            )}
            <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-52 flex flex-col p-5 px-5 lg:p-10")}>
                <div className="font-sans text-xs font-normal text-neutral-300">
                    {description}
                </div>
                <div className="max-w-[420px] font-sans text-lg lg:text-3xl font-bold text-[#C1C2D3] leading-none z-10">
                    {title}
                </div>
                {id === 2 && (
                    <GridGlobe />
                )}
                {id === 3 && (
                    <div className="absolute -top-1 md:top-full lg:-top-1 -right-5 lg:-right-2 flex gap-1 lg:gap-5 w-fit">
                        <div className="flex flex-col gap-3">
                            {techStackOne.map((item, index) => (
                                <span
                                    key={index}
                                    className="py-2 lg:py-4 px-3 text-xs lg:text-base font-semibold text-center text-neutral-200 opacity-50 lg:opacity-100 rounded-lg bg-violet-800"
                                >
                                    {item}
                                </span>
                            ))}
                            <span className="py-2 lg:py-4 px-3 text-xs lg:text-base font-semibold text-center text-neutral-200 opacity-50 lg:opacity-100 rounded-lg bg-violet-800">
                                <span className="invisible">Empty</span>
                            </span>
                        </div>
                        <div className="lg:hidden flex flex-col gap-3">
                            <span className="py-2 lg:py-4 px-3 text-xs lg:text-base font-semibold text-center text-neutral-200 opacity-50 lg:opacity-100 rounded-lg bg-violet-800">
                                <span className="opacity-0">Empty</span>
                            </span>
                            {techStackTwo.map((item, index) => (
                                <span
                                    key={index}
                                    className="py-2 lg:py-4 px-3 text-xs lg:text-base text-center opacity-50 lg:opacity-100 rounded-lg bg-violet-800"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {id === 6 && (
                    <div className="relative mt-12 md:mt-16">
                        <div className={`absolute -bottom-5 right-0`}>
                            <Lottie options={{
                                loop: copied,
                                autoplay: copied,
                                animationData,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                                }
                            }} />
                            <MagicButton
                                title={copied ? "Redirecionando..." : "Entrar em contato"}
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}