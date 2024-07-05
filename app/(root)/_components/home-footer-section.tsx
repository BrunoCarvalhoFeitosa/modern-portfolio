"use client"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import { TbBrandGithubFilled } from "react-icons/tb"

export const HomeFooterSecton = () => {
    return (
        <footer className="relative py-16 xl:pt-32 pb-6 w-full">
            <div className="absolute -bottom-72 left-0 w-full min-h-96">
                <img
                    src="/images/footer-grid.svg"
                    alt="Grid"
                    className="w-full h-full opacity-50 invert dark:invert-0"
                />
            </div>
            <div className="relative z-10">
                <div className="mx-auto w-full flex flex-col items-center lg:w-[700px]">
                    <h5 className="mx-auto w-[80%] md:w-full font-bold text-[20px] md:text-2xl text-center">
                        Pronto para elevar sua presença no mundo digital?
                    </h5>
                    <p className="mt-2 md:mt-0 text-sm text-center">
                        Entre em contato comigo, vamos discutir como 
                        posso ajudá-lo a atingir seus objetivos.
                    </p>
                </div>
                <div className="mt-5 flex justify-center items-center">
                    <ul className="flex items-center gap-2">
                        <li className="">
                            <Link
                                href="https://github.com/BrunoCarvalhoFeitosa"
                                target="_blank"
                                className="flex justify-center items-center w-10 h-10 bg-violet-700 dark:bg-[#111] rounded-md transition-transform duration-500 hover:-translate-y-1"
                            >
                                <TbBrandGithubFilled className="text-xl text-white" />
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                href="https://br.linkedin.com/in/bruno-carvalho-feitosa"
                                target="_blank"
                                className="flex justify-center items-center w-10 h-10 bg-violet-700 dark:bg-[#111] rounded-md transition-transform duration-500 hover:-translate-y-1"
                            >
                                <FaLinkedin className="text-xl text-white" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}