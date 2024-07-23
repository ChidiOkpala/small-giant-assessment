import { useContext } from "react";

import { AppContext, FilterState } from "../providers/useAppProvider";

const useFilter = () => {
  const { filterState, setFilterState } = useContext(AppContext)!;

  const handleFilterChange = (data: Partial<FilterState>) => {
    setFilterState({ ...filterState, ...data });
  };

  return { filterState, handleFilterChange };
};

export default useFilter;
