import { useMemo, useState } from "react";

import CustomButton from "@/app/components/CustomButton";
import { getFilterInitState, getFilterOptions, getSpecLabel, sortOptions } from "@/app/helpers";
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

  const hasAnActiveFilter = Object.values(filterState?.filter).find(data => data[0]);

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

  const handleSort = (value: SortDateOrder) => {
    setHasUpdatedFilter(true);

    handleFilterChange({ dateOrder: value });
  };

  const handleResetSort = () => {
    handleFilterChange({ dateOrder: null });
  };

  const handleResetFilter = () => {
    handleFilterChange({ filter: getFilterInitState() });
  };

  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col">
      {hasUpdatedFilter ? (
        <p className="self-end text-sm rounded-full bg-black text-white py-0.5 px-2 flex items-center justify-center mb-5 md:hidden" onClick={onClose}>
          Apply
        </p>
      ) : (
        <div className="self-end text-2xl rounded-full bg-black text-white w-8 h-8 flex items-center justify-center mb-3 md:hidden" onClick={onClose}>
          <span className="-mt-1">&times;</span>
        </div>
      )}
      <div className="flex justify-between items-center">
        <span className="text-base font-bold text-[#333333]">Sort</span>
        {filterState?.dateOrder && (
          <span onClick={handleResetSort} className="text-base font-bold text-[#FF0000] cursor-pointer">Reset Sort</span>
        )}
      </div>
      <div className="flex justify-between gap-5 my-5">
        {sortOptions.map(opt => (
          <CustomButton
            key={opt.label}
            text={opt.label}
            className="h-12 grow"
            theme={opt?.value === filterState?.dateOrder ? "primary" : "primary-outline"}
            onClick={() => handleSort(opt.value as SortDateOrder)}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-base font-bold text-[#333333]">Filters</h1>
        {hasAnActiveFilter && (
          <span onClick={handleResetFilter} className="text-base font-bold text-[#FF0000] cursor-pointer">Reset Filter</span>
        )}
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {structuredFilterList.map(filterGroup => {
          if (filterGroup.options.length > 1)
            return (
              <div className="flex flex-col gap-2 border-b-[0.8px] border-[#21212166] last:border-none pb-3" key={filterGroup.label}>
                <h2 className="capitalize">{getSpecLabel(filterGroup.label)}</h2>
                <div className="flex flex-col gap-2">
                  {filterGroup.options.map(option => (
                    <div key={String(option)}>
                      <label htmlFor={String(option)} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="checked:!bg-red-500 checked:border-transparent"
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
