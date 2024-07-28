import { getDaysDifference, getInitials } from "../helpers";

type JobHeaderProps = {
  title: string;
  industry: string;
  timestamp: number;
}

const JobHeader = ({ title, industry, timestamp }: JobHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center w-full gap-4">
        <span className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full text-base border border-[#F0F0F0] flex items-center justify-center text-primary font-bold">
          {getInitials(title)}
        </span>
        <div className="flex flex-col">
          <h1 className="font-bold text-sm md:text-lg text-[#030712]">{title}</h1>
          <h2 className="text-sm text-[#030712]">Industry: {industry}</h2>
        </div>
      </div>
      <span className="text-sm font-normal text-[#6B7280] hidden md:block w-fit text-nowrap">{getDaysDifference(timestamp)} day(s) ago</span>
    </div>
  );
};

export default JobHeader;
