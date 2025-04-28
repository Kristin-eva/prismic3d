import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Bounded from "@/components/Bounded";

/**
 * Props for `Work`.
 */
export type WorkProps = SliceComponentProps<Content.WorkSlice>;

/**
 * Component for "Work" Slices.
 */
const Work: FC<WorkProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <div className="grid gap-x-8 gap-y-8 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
          {slice.primary.work_and_education_title}
        </Heading>
        <div className="flex-col justify-between space-y-8">
          <PrismicRichText field={slice.primary.work_and_education_text} />
        </div>
        
        <Button
          linkField={slice.primary.work_link}
          label={slice.primary.link_title}
        />
      </div>
    </Bounded>
  );
};

export default Work;
