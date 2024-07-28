import { useMemo } from "react";
import Image from "next/image";

import BookIcon from "@/public/icons/book.svg";
import BriefCaseIcon from "@/public/icons/brief-case.svg";
import ClockIcon from "@/public/icons/clock.svg";
import LocationIcon from "@/public/icons/location.svg";
import { getSpecLabel } from "../helpers";

type JobSpecItemProps = {
  specValue: string | number;
  specLabel: string;
};

const JobSpecItem = ({ specValue, specLabel }: JobSpecItemProps) => {
  const spec = specLabel === "hoursPerWeek" ? `${specValue} ${getSpecLabel(specLabel)}` : specValue

  const specIcon = useMemo(() => {
    switch (specLabel) {
      case "educationLevel":
        return BookIcon;
      case "experienceLevel":
        return BriefCaseIcon;
      case "hoursPerWeek":
        return ClockIcon;
      case "city":
        return LocationIcon;
    
      default:
        return null;
    }
  }, [specLabel]);

  return (
    <div className="flex items-center gap-1">
      <Image alt={`${spec} icon`} src={specIcon} className="scale-90 md:scale-100" />
      <span className="text-xs font-normal text-[#030712]">{spec}</span>
    </div>
  )
};

export default JobSpecItem;
