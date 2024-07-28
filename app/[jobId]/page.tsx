"use client"

import { useRouter } from "next/navigation";

import { getJobData, jobBenefits } from "@/app/helpers";
import CustomButton from "@/app/components/CustomButton";

const VacancyDetails = ({ params }: { params: { jobId: string } }) => {
  const router = useRouter();

  const { jobId = "" } = params;

  const selectedJobData = getJobData(jobId)!;

  const handleApplyClick = () => {
    router.push(`/${selectedJobData?.jobId}/application`);
  };

  return (
    <>
      <div className="flex flex-col gap-1 lg:gap-2 border-b border-b-[#C4C4C4] pb-5">
        <span className="text-sm lg:text-base font-semibold w-full block pb-2">Job Description</span>
        <div className="text-xs lg:text-sm font-normal text-[#0F0F0F]" dangerouslySetInnerHTML={{ __html: selectedJobData?.intro }} />
      </div>
      <div className="flex flex-col gap-1 lg:gap-2 mt-5 border-b border-b-[#C4C4C4] pb-5">
        <span className="text-sm lg:text-base font-semibold w-full block pb-2">Benefits</span>
        <ul className="ml-4">
          {jobBenefits.map(benefit => (
            <li className="text-xs lg:text-sm font-normal text-[#0F0F0F] list-disc py-1" key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-1 lg:gap-2 mt-5 pb-5">
        <span className="text-sm lg:text-base font-semibold w-full block pb-2">Recruiter</span>
        <span className="text-xs lg:text-sm font-normal text-[#0F0F0F]">{selectedJobData.recruiter}</span>
      </div>
      <CustomButton
        text="Apply Now"
        theme="primary-outline"
        className="h-12 border border-black mt-5 hidden lg:block"
        onClick={handleApplyClick}
      />

      <div className="fixed bottom-5 left-0 w-full flex justify-center md:hidden z-20">
        <CustomButton
          text="Apply Now"
          onClick={handleApplyClick}
          className="w-9/12 h-12 shadow-2xl !rounded-full !bg-white border border-dashed border-primary !text-primary z-10"
        />
      </div>
    </>
  );
};

export default VacancyDetails;
