import { useRouter } from "next/navigation";

import JobSpec from "./JobSpec";

type JobHeaderProps = {
  title: string;
  goBackText: string;
  specs: Record<string, string | number>;
}

const JobHeader = ({ goBackText, title, specs }: JobHeaderProps) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();  
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="mb-3 text-lg font-bold">{title}</h1>
        <button className="py-1 px-4 bg-gray-400 hidden sm:block" onClick={handleGoBack}>{goBackText}</button>
      </div>
      <div className="flex flex-col items-start gap-2 w-full">
        <span className="text-base font-semibold border-b border-b-gray-600 w-full block pb-2">Job Specifications</span>
        <JobSpec specs={specs} />
      </div>
    </div>
  );
};

export default JobHeader;
