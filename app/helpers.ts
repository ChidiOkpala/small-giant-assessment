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
  
    default:
      return label;
  }
};