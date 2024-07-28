"use client"

import { useMemo, useState } from "react";

import Image from "next/image";

import CustomButton from "@/app/components/CustomButton";
import FilterCard from "@/app/components/FilterCard";
import JobCard from "@/app/components/JobCard";
import SearchBanner from "@/app/components/SearchBanner";
import vacancies from "@/app/constants/vacancy-list.json";
import useFilter from "@/app/hooks/useFilter";
import WarningIcon from "@/public/icons/warning.svg";

const JobListingPage = () => {
  const { filterState } = useFilter();

  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);

  const vacancyList = useMemo(() => {
    let filteredVacancies = vacancies;

    /*Filtering of the vacancy bases on user filter selection */
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

    /*Filtering of the vacancy based on user search*/
    filteredVacancies = filteredVacancies.filter(vacancy => vacancy.title.toLowerCase().includes(filterState?.search?.toLowerCase() || ""));

    /*Sorting of the vacancy based on the selected order*/
    if (filterState?.dateOrder === "oldest") {
      filteredVacancies = filteredVacancies.sort((a, b) => a.date.timestamp - b.date.timestamp);
    };

    if (filterState?.dateOrder === "newest") {
      filteredVacancies = filteredVacancies.sort((a, b) => b.date.timestamp - a.date.timestamp)
    };

    return filteredVacancies;
  }, [filterState?.search, filterState?.filter, filterState?.dateOrder]);

  return (
    <main className="w-full pb-16 md:pb-0">
      <SearchBanner />
      <div className="flex gap-5 w-full mt-5">
        <div key={String(showMobileFilter)} className={showMobileFilter ? "w-full fixed z-10 bg-white overflow-auto inset-0 block md:hidden" : "hidden"}>
          <FilterCard onClose={() => setShowMobileFilter(false)} />
        </div>
        <div className="w-1/4 hidden md:block">
          <FilterCard onClose={() => setShowMobileFilter(false)} />
        </div>
        {vacancyList?.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 w-full md:w-3/4 h-fit">
            {vacancyList.map((vacancy) => (
              <JobCard
                key={vacancy.jobId}
                title={vacancy.title}
                description={vacancy.intro}
                jobId={vacancy.jobId}
                industry={vacancy.industry}
                timestamp={vacancy.date.timestamp}
                specs={vacancy.specs}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3 items-center justify-start w-full md:w-3/4 bg-white shadow-xl py-10 h-fit rounded-lg border border-[#E6E6E6]">
            <Image alt="No vacancy found" src={WarningIcon} />
            <h2 className="opacity-90 text-base font-semibold">No Vacancy Found</h2>
            <p className="opacity-50 italic text-sm">Update your filter and search options.</p>
          </div>
        )}
      </div>
      <div className="fixed bottom-5 left-0 w-full flex justify-center md:hidden">
        <CustomButton className="w-9/12 h-12 shadow-2xl !rounded-full !bg-white border border-dashed border-primary !text-primary" text="Filter" onClick={() => setShowMobileFilter(true)} />
      </div>
    </main>
  );
};

export default JobListingPage;
