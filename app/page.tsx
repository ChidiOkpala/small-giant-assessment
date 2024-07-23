"use client"

import { useMemo, useState } from "react";

import FilterCard from "@/app/components/FilterCard";
import JobCard from "@/app/components/JobCard";
import vacancies from "@/app/constants/vacancy-list.json";
import useFilter from "@/app/hooks/useFilter";

export default function Home() {
  const { filterState } = useFilter();

  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);

  const vacancyList = useMemo(() => {
    let filteredVacancies = vacancies;

    filteredVacancies = filteredVacancies.filter(vacancy => {
      let shouldShowVacancy = true;

      Object.entries(filterState?.filter).find(([key, value]) => { 
        if (value.length > 0 && shouldShowVacancy) {
          const vacancyHasSelectedSpec = value.find(spec => spec == (vacancy.specs as Record<string, string | number>)[key]);

          shouldShowVacancy = Boolean(vacancyHasSelectedSpec);
        }
      })

      return shouldShowVacancy;
    });

    filteredVacancies = filteredVacancies.filter(vacancy => vacancy.title.toLowerCase().includes(filterState?.search?.toLowerCase() || ""));

    if (filterState?.dateOrder === "ascending") {
      filteredVacancies = filteredVacancies.sort((a, b) => {
        return new Date(a.date.timestamp[0]).getTime() - new Date(b.date.timestamp[0]).getTime();
      })
    };

    if (filterState?.dateOrder === "descending") {
      filteredVacancies = filteredVacancies.sort((a, b) => {
        return new Date(b.date.timestamp[0]).getTime() - new Date(a.date.timestamp[0]).getTime();
      })
    };

    return filteredVacancies;
  }, [filterState?.search, filterState?.filter, filterState?.dateOrder]);

  return (
    <main className="w-full">
      <div className="w-full flex justify-between md:justify-center items-center mb-5">
        <h1 className="text-xl font-bold text-left md:text-center">Job Vacancy Listing</h1>
        <button className="py-1 px-4 bg-gray-400 md:hidden" onClick={() => setShowMobileFilter(true)}>Filter</button>
      </div>
      <div className="flex gap-5 w-full">
        <div key={String(showMobileFilter)} className={showMobileFilter ? "w-full fixed z-10 bg-white overflow-auto inset-0 block md:hidden" : "hidden"}>
          <FilterCard onClose={() => setShowMobileFilter(false)} />
        </div>
        <div className="w-1/4 hidden md:block">
          <FilterCard onClose={() => setShowMobileFilter(false)} />
        </div>
        {vacancyList?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-3/4 h-fit">
            {vacancyList.map((vacancy) => (
              <JobCard
                key={vacancy.jobId}
                title={vacancy.title}
                description={vacancy.intro}
                jobId={vacancy.jobId}
                specs={vacancy.specs}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3 items-center justify-start w-full md:w-3/4 bg-white shadow-xl py-10 h-fit">
            <h2 className="opacity-90 text-base font-semibold">No Vacancy Found</h2>
            <p className="opacity-50 italic text-sm">Update your filter and search options.</p>
          </div>
        )}
      </div>
    </main>
  );
};
