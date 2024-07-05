"use client"
import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid"

export const HomeAboutSection = () => {
    return (
        <section>
            <BentoGrid>
                {gridItems.map((item) => (
                    <BentoGridItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}