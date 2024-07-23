"use client"

import JobApplicationForm from "@/app/components/JobApplicationForm";
import JobHeader from "@/app/components/JobHeader";
import { getJobData } from "@/app/helpers";

const JobApplication = ({ params }: { params: { jobId: string } }) => {
  const { jobId = "" } = params;

  const selectedJobData = getJobData(jobId)!;
  
  return (
    <div className="flex flex-col gap-5 md:px-24 w-full">
      <JobHeader
        goBackText="Back To Job Details"
        title={selectedJobData?.title}
        specs={selectedJobData?.specs}
      />
      <JobApplicationForm />
    </div>
  );
};

export default JobApplication;
