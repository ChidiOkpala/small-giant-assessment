"use client"

import React from "react";

import Error from "next/error";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import JobSpec from "@/app/[jobId]/components/JobSpec";
import SimilarJobs from "@/app/[jobId]/components/SimilarJobs";
import JobHeader from "@/app/components/JobHeader";
import { getJobData } from "@/app/helpers";
import ArrowLeft from "@/public/icons/arrowLeft.svg";


type JobLayoutProps = {
  children: React.ReactNode;
  params: { jobId: string };
};

const JobLayout = ({ children, params }: JobLayoutProps) => {
  const { jobId = "" } = params;

  const pathname = usePathname();
  const router = useRouter();

  const isOnApplicationPage = pathname.includes("/application");

  const selectedJobData = getJobData(jobId);

  const handleGoBack = () => {
    router.back();
  };
  
  if (!selectedJobData) {
    return <Error statusCode={404} />
  };

  return (
    <div className="pb-16 lg:pb-0">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-8/12 bg-white border border-[#E6E6E6] px-3 lg:px-5 pt-4 lg:pt-8 pb-5 rounded-lg">
          <div className="flex items-center">
            <div onClick={handleGoBack} className="flex items-center gap-2 mb-4 lg:mb-7 cursor-pointer">
              <Image alt="Back to Jobs" src={ArrowLeft} />
              <span className="text-sm lg:text-base font-normal text-[#030712]">Back to Job</span>
            </div>
          </div>
          <JobHeader
            title={selectedJobData?.title}
            industry={selectedJobData?.industry}
            timestamp={selectedJobData?.date?.timestamp}
          />
          <div className="mt-5">
            {children}
          </div>
        </div>

        <div className="w-full lg:w-4/12">
          <JobSpec
            jobId={jobId}
            hideButton={isOnApplicationPage}
            specs={selectedJobData?.specs}
          />
        </div>
      </div>

      <SimilarJobs jobId={jobId} />
    </div>
  );
};

export default JobLayout;
