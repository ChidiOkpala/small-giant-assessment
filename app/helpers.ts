import vacancies from "@/app/constants/vacancy-list.json";

export const getJobData = (jobId: string) => {
  const selectedJobData = vacancies.find(vacancy => vacancy.jobId === jobId);

  return selectedJobData;
};

export const getSpecLabel = (label: string): string => {
  switch (label) {
    case "educationLevel":
      return "Education Level";
    case "experienceLevel":
      return "Experience Level";
    case "functionGroup":
      return "Function Group"
    case "hoursPerWeek":
      return "Hours Per Week";
    case "companyType":
      return "Company Type"
  
    default:
      return label;
  }
};