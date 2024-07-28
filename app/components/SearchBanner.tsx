import Image from "next/image";

import SearchIcon from "@/public/icons/search.svg";
import useFilter from "../hooks/useFilter";

const SearchBanner = () => {
  const { filterState, handleFilterChange } = useFilter();

  const handleSearch = (value: string) => {
    handleFilterChange({ search: value });
  };

  return (
    <div className="bg-mobile-banner-bg bg-no-repeat bg-cover md:bg-banner-bg w-full bg-center rounded-3xl border-2 border-gray-100 flex flex-col items-center gap-2 py-4 px-4">
      <h1 className="text-xl lg:text-2xl text-[#171717] text-center">Find Your Dream Job Today</h1>
      <p className="text-xs md:text-sm font-normal text-[#333333] text-center">Explore thousands of opportunities, connect with top employers, and take the next step in your career.</p>
      <div className="relative w-full max-w-72 md:max-w-screen-sm lg:max-w-screen-md mx-auto">
        <input
          className="w-full outline-none rounded-2xl h-10 md:h-9 border border-[#C0C0C063] py-4 pl-10 pr-3.5 text-sm placeholder:text-[#333333] placeholder:text-sm"
          placeholder="Search"
          value={filterState?.search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Image alt="Search" className="absolute left-4 top-3 md:top-2" src={SearchIcon} />
      </div>
    </div>
  );
};

export default SearchBanner;
