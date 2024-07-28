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

export const getInitials = (name: string) => {
  const splittedName = name.replaceAll("/", "").split(" ");

  return `${splittedName[0][0]}${splittedName[1] ? splittedName[1][0] : ""}`;
};

export const getDaysDifference = (timestamp: number): number => {
  const today = new Date();
  const timestampDate = new Date(timestamp * 1000);

  let diffInTime = today.getTime() - timestampDate.getTime();

  return Math.floor(diffInTime / (1000 * 3600 * 24));
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

export const jobBenefits = [
  "Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your choice from the bar)",
  "28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional day off on your birthday",
  "Generous annual bonus.",
  "Healthcare package",
  "Paid community days to volunteer for a charity of your choice",
  "£100 contribution for your own personal learning and development",
  "Free Breakfast on Mondays and free snacks in the office",
  "Access to Perkbox with numerous discounts plus free points from the company to spend as you wish.",
  "Cycle 2 Work Scheme",
  "Brand new MacBook Pro",
  "Joining an agency on the cusp of exponential growth and being part of this exciting story."
];
