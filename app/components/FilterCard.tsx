import { useMemo, useState } from "react";

import { getFilterOptions, getSpecLabel, sortOptions } from "@/app/helpers";
import useFilter from "@/app/hooks/useFilter";
import { SortDateOrder } from "@/app/providers/AppProvider";

type FilterCardProps = {
  onClose: () => void;
};

const FilterCard = ({ onClose }: FilterCardProps) => {
  const { filterState, handleFilterChange } = useFilter();

  const [hasUpdatedFilter, setHasUpdatedFilter] = useState(false);

  const structuredFilterList = useMemo(() => {
    const filterOptions = getFilterOptions();

    return filterOptions;
  }, []);

  const handleFilterSelection = (label: string, option: string | number) => {
    let filterValues = filterState?.filter[label];

    setHasUpdatedFilter(true);

    const isValueInState = filterValues.find(data => data === option);

    if (isValueInState) {
      filterValues = filterValues.filter(data => data !== option);
    } else {
      filterValues.push(option);
    }

    const newFilterValues = { ...filterState?.filter, [label]: filterValues };

    handleFilterChange({ filter: newFilterValues });
  };

  const handleSearch = (value: string) => {
    setHasUpdatedFilter(true);

    handleFilterChange({ search: value });
  };

  const handleSort = (value: SortDateOrder) => {
    setHasUpdatedFilter(true);

    handleFilterChange({ dateOrder: value });
  };

  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between mb-5 md:mb-2">
        <h1 className="text-gray-600 font-bold text-base">Filters</h1>
        {hasUpdatedFilter ? (
          <p className="text-sm rounded-full bg-black text-white py-0.5 px-2 flex items-center justify-center md:hidden" onClick={onClose}>
            Apply
          </p>
        ) : (
          <div className="text-2xl rounded-full bg-black text-white w-8 h-8 flex items-center justify-center md:hidden" onClick={onClose}>
            <span className="-mt-1">&times;</span>
          </div>
        )}
      </div>
      <input
        value={filterState?.search || ""}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full border border-black pl-3 h-8 outline-none"
        placeholder="search"
      />

      <div className="flex justify-between gap-5 mt-5">
        {sortOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => handleSort(opt.value as SortDateOrder)}
            className={`h-11 border grow border-black ${opt.value === filterState?.dateOrder ? "bg-black text-white" : "bg-white text-black"}`}
          >{opt.label}</button>
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {structuredFilterList.map(filterGroup => {
          if (filterGroup.options.length > 1)
            return (
              <div className="flex flex-col gap-2 border-b border-black last:border-none pb-3" key={filterGroup.label}>
                <h2 className="capitalize">{getSpecLabel(filterGroup.label)}</h2>
                <div className="flex flex-col gap-2">
                  {filterGroup.options.map(option => (
                    <div key={String(option)}>
                      <label htmlFor={String(option)} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          key={option.toLocaleString()}
                          onChange={() => handleFilterSelection(filterGroup?.label, option)}
                          checked={Boolean(filterState?.filter[filterGroup.label].find(data => data == option))}
                        />
                        <span className="text-xs">{option}</span>
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
