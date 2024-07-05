import React from "react"

export const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string
  icon: React.ReactNode
  position: string
  handleClick?: () => void
  otherClasses?: string
}) => {
  return (
    <button
      className="group relative inline-flex h-12 md:h-14 w-full lg:w-[300px] md:mt-10 overflow-hidden rounded-md group-hover:p-0 p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md px-7 text-sm font-bold uppercase text-white backdrop-blur-3xl gap-2 bg-[#5B21B6] dark:bg-black group-hover:bg-gradient-violet ${otherClasses}`}>
        <div className="text-xl">
          {position === "left" && icon}
        </div>
        {title}
        <div className="text-xl">
          {position === "right" && icon}
        </div>
      </span>
    </button>
  )
}