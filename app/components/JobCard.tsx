import { getSpecLabel } from "@/app/helpers";

type JobCardProps = {
  title: string;
  description: string;
  specs: {
    sector: string;
    hoursPerWeek: number;
    industry: string;
    experienceLevel: string;
    region: string;
    city: string;
  };
  onSeeMore: () => void;
};

const JobCard = ({ description, specs, title, onSeeMore }: JobCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-2 text-12 bg-white shadow-lg">
      <h1 className="font-bold text-base">{title}</h1>
      <div className="text-sm" dangerouslySetInnerHTML={{ __html: description }} />
      <ul className="border-t border-t-gray-600 flex flex-col gap-1 pt-1 mt-auto">
        {Object.entries(specs).map(([key, value]) => (<li className="text-sm capitalize" key={key}>{getSpecLabel(key)}: {value}</li>))}
      </ul>
      <button className="w-40 h-12 self-end border border-black" onClick={onSeeMore}>See More</button>
    </div>
  );
};

export default JobCard;
