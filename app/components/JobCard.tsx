import { useRouter } from "next/navigation";

import JobSpec from "./JobSpec";

type JobCardProps = {
  title: string;
  jobId: string;
  description: string;
  specs: Record<string, string | number>;
};

const JobCard = ({ jobId, description, specs, title }: JobCardProps) => {
  const router = useRouter();

  const handleSeeMore = () => {
    router.push(`/${jobId}`);
  };

  return (
    <div className="flex flex-col gap-2 p-2 text-12 bg-white shadow-lg">
      <h1 className="font-bold text-base">{title}</h1>
      <div className="text-sm" dangerouslySetInnerHTML={{ __html: description }} />
      <div className="mt-auto border-t border-t-gray-700 flex flex-col">
        <JobSpec specs={specs} specCount={5} />
        <button className="w-40 h-12 self-end border border-black" onClick={handleSeeMore}>See More</button>
      </div>
    </div>
  );
};

export default JobCard;
