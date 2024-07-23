"use client"

import { useState } from "react";

import vacancies from "@/app/constants/vacancy-list.json";
import JobCard from "./components/JobCard";
import FilterCard from "./components/FilterCard";

export default function Home() {
  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 md:py-12 px-6 md:px-12">
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
              specs={{
                sector: vacancy.specs.sector,
                hoursPerWeek: vacancy.specs.hoursPerWeek,
                industry: vacancy.specs.industry,
                experienceLevel: vacancy.specs.experienceLevel,
                region: vacancy.specs.region,
                city: vacancy.specs.city
              }}
              onSeeMore={() => {}}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
