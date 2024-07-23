"use client"

import { useState } from "react";

import vacancies from "@/app/constants/vacancy-list.json";
import JobCard from "./components/JobCard";
import FilterCard from "./components/FilterCard";

export default function Home() {
  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);

  return (
    <main>
      <div className="w-full flex justify-between md:justify-center items-center mb-5">
        <h1 className="text-xl font-bold text-left md:text-center">Job Vacancy Listing</h1>
        <button className="py-1 px-4 bg-gray-400 md:hidden" onClick={() => setShowMobileFilter(true)}>Filter</button>
      </div>
      <div className="flex gap-5 w-full">
        <div className="hidden md:block w-1/4">
          <FilterCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-3/4">
          {vacancies.map((vacancy) => (
            <JobCard
              key={vacancy.jobId}
              title={vacancy.title}
              description={vacancy.intro}
              jobId={vacancy.jobId}
              specs={vacancy.specs}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
