"use client"

import Error from "next/error";
import { useRouter } from "next/navigation";

import vacancies from "@/app/constants/vacancy-list.json";
import JobHeader from "@/app/components/JobHeader";

const VacancyDetails = ({ params }: { params: { jobId: string } }) => {
  const router = useRouter();

  const { jobId = "" } = params;

  const selectedJobData = vacancies.find(vacancy => vacancy.jobId === jobId);

  const handleApplyClick = () => {
    router.push(`/${selectedJobData?.jobId}/application`);
  };

  if (!selectedJobData) {
    return <Error statusCode={404} />
  };

  return (
    <div className="flex flex-col gap-5 p-12 md:p-24 md:py-14">
      <JobHeader
        goBackText="Back To Job Listing"
        title={selectedJobData?.title}
        specs={selectedJobData?.specs}
      />
      <div className="flex flex-col gap-2">
        <span className="text-base font-semibold border-b border-b-gray-600 w-full block pb-2">Job Description</span>
        <div dangerouslySetInnerHTML={{ __html: selectedJobData?.intro }} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-base font-semibold border-b border-b-gray-600 w-full block pb-2">Recruiter</span>
        <span>{selectedJobData.recruiter}</span>
      </div>
      <button className="w-40 h-12 border border-black" onClick={handleApplyClick}>Apply</button>
    </div>
  );
};

export default VacancyDetails;
