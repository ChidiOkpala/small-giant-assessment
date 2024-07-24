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

export const getFilterOptions = () => {
  const filterGroupLabels = Object.keys(vacancies[0].specs).filter(spec => !spec.startsWith("_"));

  return filterGroupLabels.map(label => {
    const options: Array<string | number> = [];

    vacancies.forEach(vacancy => Object.entries(vacancy.specs).forEach(([key, value]) => {
      if (key === label && value) {
        options.push(value)
      }
    }));
  
    return {
      label,
      options: [...new Set(options)]
    }
  });
};

export const getFilterInitState = (): Record<string, Array<string | number>> => {
  let filterState = {};

  getFilterOptions().forEach(opt => {
    filterState = { ...filterState, [opt.label]: [] }
  });

  return filterState;
};

export const sortOptions = [
  {
    label: "Oldest",
    value: "oldest"
  },
  {
    label: "Newest",
    value: "newest"
  }
];
