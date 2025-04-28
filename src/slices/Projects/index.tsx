import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  PrismicImage,
} from "@prismicio/react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects: FC<ProjectsProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-8 md:grid-cols-[2fr,1fr]">
        {/* Title */}
        <Heading as="h1" size="xl" className="col-start-1">
          {slice.primary.title}
        </Heading>

        <div className="text-xl font-semibold grid gap-x-8 gap-y-8 md:grid-cols-[2fr,1fr] col-start-1">
        <PrismicRichText field={slice.primary.subtitle} />
        </div>
        
        {/* Description */}
        <div className="flex flex-col justify-between space-y-8 col-start-3">
          <PrismicRichText field={slice.primary.description} />
        </div>

        {/* Button */}
        <div className="text-stone-50 col-start-1">
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />
        </div>

        {/* Prismic Image */}
        {slice.primary.project_image && (
          <PrismicImage
            field={slice.primary.project_image}
            className="rounded-4xl shadow-lg max-w-md h-70 w-48 col-start-1"
          />
        )}
      </div>
    </Bounded>
  );
};

export default Projects;
