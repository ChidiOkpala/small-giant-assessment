"use client"

import { createContext, ReactNode, useState } from "react";
import { getFilterInitState } from "../helpers";

type AppContextProps = {
  filterState: FilterState;
  setFilterState: (filterState: FilterState) => void;
}

export type SortDateOrder = "ascending" | "descending";

export type FilterState = {
  search: string;
  filter: Record<string, Array<string | number>>;
  dateOrder?: SortDateOrder;
}

export const AppContext = createContext<AppContextProps | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [filterState, setFilterState] = useState<FilterState>({
    search: "",
    filter: getFilterInitState(),
  });

  return (
    <AppContext.Provider
      value={{
        filterState,
        setFilterState
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider;
