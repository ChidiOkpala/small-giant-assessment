import { useRouter } from "next/navigation";

import CustomButton from "@/app/components/CustomButton";
import JobSpecItem from "@/app/components/JobSpecItem";
import JobHeader from "@/app/components/JobHeader";

type JobCardProps = {
  title: string;
  jobId: string;
  description: string;
  industry: string;
  timestamp: number;
  hideButton?: boolean;
  specs: Record<string, string | number>;
};

const JobCard = ({ jobId, description, specs, title, timestamp, industry, hideButton = false }: JobCardProps) => {
  const router = useRouter();

  const handleSeeMore = () => {
    router.push(`/${jobId}`);
  };

  const groupedSpecList = [
    {
      label: "educationLevel",
      value: specs?.educationLevel
    },
    {
      label: "experienceLevel",
      value: specs?.experienceLevel
    },
    {
      label: "hoursPerWeek",
      value: specs?.hoursPerWeek
    },
    {
      label: "city",
      value: specs?.city
    }
  ];

  return (
    <div className="flex flex-col gap-2 p-4 md:p-6 text-12 bg-white rounded-lg border border-[#E6E6E6]">
      <JobHeader title={title} timestamp={timestamp} industry={industry} />
      <div className="text-xs sm:text-sm text-[#030712] mt-1.5" dangerouslySetInnerHTML={{ __html: description }} />
      <div className="mt-auto border-t border-t-[#C4C4C4] flex flex-col">
        <div className="flex flex-wrap items-center gap-3 mt-3">
          {(groupedSpecList || [])?.map(spec => (
            <JobSpecItem key={spec.label} specLabel={String(spec.label)} specValue={spec.value} />
          ))}
        </div>
        {!hideButton && (
          <CustomButton className="w-full md:!w-fit !h-12 mt-7 md:mt-10" text="See More" onClick={handleSeeMore} />
        )}
      </div>
    </div>
  );
};

export default JobCard;
