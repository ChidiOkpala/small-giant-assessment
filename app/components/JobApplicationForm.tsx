import { useState } from "react";

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

  const handleChange = (key: keyof FormState, value: string | File) => {
    setFormState({ ...formState, [key]: value });
  };

  return (
    <>
      <p className="pb-3 border-b border-b-gray-600 text-base font-semibold">Application Form</p>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex items-center gap-5">
          <input onChange={(e) => handleChange("firstName", e.target.value)} name="firstName" className="w-full md:w-1/2 h-11 border border-gray-500 outline-none rounded-lg px-4" type="text" placeholder="First name" required />
          <input onChange={(e) => handleChange("lastName", e.target.value)} name="lastName" className="w-full md:w-1/2 h-11 border border-gray-500 outline-none rounded-lg px-4" type="text" placeholder="Last name" required />
        </div>
        <input onChange={(e) => handleChange("email", e.target.value)} name="email" className="w-full h-11 border border-gray-500 outline-none rounded-lg px-4" type="email" placeholder="Email" required />
        <input onChange={(e) => handleChange("linkedUrl", e.target.value)} name="linkedUrl" className="w-full h-11 border border-gray-500 outline-none rounded-lg px-4" type="url" placeholder="https://" required />
        <input onChange={(e) => handleChange("cv", e.target.files![0])} name="cv" accept=".pdf,.doc,.docx" className="w-full h-11 border border-gray-500 outline-none rounded-lg px-4" type="file" placeholder="Select File" required />
        <button type="submit" className="py-1 px-4 bg-gray-400 mt-5 max-w-40 h-11">Submit</button>
      </form>
    </>
  );
};

export default JobApplicationForm;
