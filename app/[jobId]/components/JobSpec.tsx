import { useRouter } from "next/navigation";

import CustomButton from "@/app/components/CustomButton";
import { getSpecLabel } from "@/app/helpers";

type JobSpecProps = {
  jobId: string;
  specs: Record<string, string | number>;
  specCount?: number;
  hideButton?: boolean;
};

const JobSpec = ({ hideButton = false, jobId, specs, specCount }: JobSpecProps) => {
  const router = useRouter();

  const count = specCount ? specCount + 1 : Object.keys(specs).length;

  const specsWithValue = Object.entries(specs).filter(([_, value]) => value);

  const handleApplyNow = () => {
    router.push(`/${jobId}/application`);
  };

  return (
    <div className="bg-white p-4 lg:p-6 border border-[#E6E6E6] rounded-lg ">
      <div className="flex flex-wrap gap-2 items-center justify-between mb-5">
        <h1 className="text-base lg:text-lg font-bold text-[#030712]">Job Specifications</h1>
        {!hideButton && (
          <CustomButton
            text="Apply Now"
            className="!h-10 hidden md:block"
            onClick={handleApplyNow}
          />
        )}
      </div>
      <div className="flex flex-col gap-3">
        {specsWithValue.slice(0, count).map(([key, value]) => {
          if (!key.startsWith("_")) {
            return (
              <div className="flex flex-col" key={key}>
                <span className="text-xs lg:text-sm font-bold text-[#030712] capitalize">{getSpecLabel(key)}</span>
                <span className="font-normal text-sm lg:text-base text-[#030712] capitalize">{value}</span>
              </div>
            )
          }
        })}
      </div>
    </div>
  );
};

export default JobSpec;
