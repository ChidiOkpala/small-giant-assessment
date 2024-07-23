"use client"

import { useRouter } from "next/navigation";

import JobHeader from "@/app/components/JobHeader";
import { getJobData } from "../helpers";

const VacancyDetails = ({ params }: { params: { jobId: string } }) => {
  const router = useRouter();

  const { jobId = "" } = params;

  const selectedJobData = getJobData(jobId)!;

  const handleApplyClick = () => {
    router.push(`/${selectedJobData?.jobId}/application`);
  };

  return (
    <div className="flex flex-col gap-5 md:px-24">
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
      <button className="w-40 h-12 border border-black mt-5" onClick={handleApplyClick}>Apply</button>
    </div>
  );
};

export default VacancyDetails;
