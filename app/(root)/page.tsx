import { HomeHeroSection } from "@/app/(root)/_components/home-hero-section"
import { HomeAboutSection } from "@/app/(root)/_components/home-about-section"
import { HomeProjectsSection } from "@/app/(root)/_components/home-projects-section"
import { HomeTestimonialsSection } from "./_components/home-testimonials-section"
import { HomeLetsWorkTogetherSection } from "./_components/home-lets-work-together-section"
import { HomeFooterSecton } from "./_components/home-footer-section"

const HomePage = () => {
  return (
    <main className="relative mx-auto sm:px-10 flex flex-col justify-center items-center bg-white dark:bg-black overflow-hidden">
      <div className="px-5 md:px-0 max-w-7xl w-full">
        <HomeHeroSection />
        <HomeAboutSection />
        <HomeProjectsSection />
        <HomeLetsWorkTogetherSection />
        <HomeTestimonialsSection />
        <HomeFooterSecton />
      </div>
    </main>
  )
}

export default HomePage