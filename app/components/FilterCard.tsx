import vacancies from "@/app/constants/vacancy-list.json";
import { useMemo } from "react";
import { getSpecLabel } from "../helpers";

const FilterCard = () => {
  const structuredFilterList = useMemo(() => {
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
  }, []);

  return (
    <div className="bg-white p-4">
      <h1 className="text-gray-600 font-bold text-base mb-2">Filters</h1>
      <input className="w-full border border-black pl-3 h-8 outline-none" placeholder="search" />

      <div className="flex flex-col gap-3 mt-5">
        {structuredFilterList.map(filterGroup => {
          if (filterGroup.options.length > 1)
            return (
              <div className="flex flex-col gap-2 border-b border-black last:border-none pb-3" key={filterGroup.label}>
                <h2 className="capitalize">{getSpecLabel(filterGroup.label)}</h2>
                <div className="flex flex-col gap-2">
                  {filterGroup.options.map(options => (
                    <div key={String(options)}>
                      <label htmlFor={String(options)} className="flex items-center gap-2">
                        <input key={options.toLocaleString()} type="checkbox" />
                        <span className="text-xs">{options}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )
        })}
      </div>

    </div>
  );
};

export default FilterCard;
