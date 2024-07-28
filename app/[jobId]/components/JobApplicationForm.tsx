import { useState } from "react";

import CustomButton from "@/app/components/CustomButton";
import Upload from "@/app/components/Upload";
import CustomInput from "@/app/components/CustomInput";

type FormState = {
  firstName: string;
  lastName: string;
  linkedUrl: string;
  email: string;
  cv: File | null;
};

const JobApplicationForm = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    linkedUrl: "",
    email: "",
    cv: null
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(formState);

    alert("Logged Application data in the console.")
  };

  const handleChange = (key: keyof FormState, value: string | File | null) => {
    setFormState({ ...formState, [key]: value });
  };

  return (
    <>
      <p className="pb-3 text-lg font-semibold">Application Form</p>
      <form className="flex flex-col gap-3 lg:gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center gap-3 lg:gap-5 w-full">
          <CustomInput label="First Name" onChange={(value) => handleChange("firstName", value)} name="firstName" type="text" placeholder="Enter your first name" required />
          <CustomInput label="Last Name" onChange={(value) => handleChange("lastName", value)} name="lastName" type="text" placeholder="Enter your last name" required />
        </div>
        <CustomInput label="Email" onChange={(value) => handleChange("email", value)} name="email" type="email" placeholder="Enter your email" required />
        <CustomInput label="LinkedIn Url" onChange={(value) => handleChange("linkedUrl", value)} name="linkedUrl" type="url" placeholder="https://" required />
        <Upload label="CV/Resume" onChange={(file) => handleChange("cv", file)} /> 

        <CustomButton
          type="submit"
          text="Submit Application"
          className="py-1 px-4 mt-5 h-11 w-fit"
        />
      </form>
    </>
  );
};

export default JobApplicationForm;
