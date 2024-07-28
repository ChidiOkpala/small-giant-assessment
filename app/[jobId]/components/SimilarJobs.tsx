import vacancyList from "@/app/constants/vacancy-list.json";
import JobCard from "@/app/components/JobCard";

type SimilarJobsProps = {
  jobId: string;
};

const SimilarJobs = ({ jobId }: SimilarJobsProps) => {
  const otherVacancies = vacancyList.filter(vacancy => vacancy.jobId !== jobId);

  return (
    <div className="mt-10">
      <h1 className="text-xl lg:text-3xl font-bold text-[#030712]">Similar Jobs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
        {(otherVacancies || [])?.map(vacancy => (
          <JobCard
            key={vacancy.jobId}
            jobId={vacancy.jobId}
            description={vacancy.intro}
            specs={vacancy.specs}
            title={vacancy.title}
            timestamp={vacancy.date.timestamp}
            industry={vacancy.industry}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarJobs;
