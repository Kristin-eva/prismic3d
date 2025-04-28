import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

/**
 * Component for "TechList" Slices.
 */
const TechList: FC<TechListProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wrapper overflow-hidden"
    >
      <Bounded>
      <Heading size="xl" className="mb-8" as="h2">
        {slice.primary.heading}
      </Heading>
      <div className="flex-col justify-between space-y-8">
      <PrismicRichText field={slice.primary.description} />
        </div>
      </Bounded>
      {slice.items.map(({ tech_color, tech_name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={tech_name || ""}
        ></div>
      ))}
    </section>
  );
};

export default TechList;
