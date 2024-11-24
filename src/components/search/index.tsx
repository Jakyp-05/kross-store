import React from "react";

import searchImage from "../../assets/svg/search.svg";
import useSearch from "../../hooks/useSearch";

const Search: React.FC = () => {
  const { searchQuery, handleSearch } = useSearch();

  return (
    <div className="w-[250px] h-[45px] border-[1px] border-solid border-color rounded-[10px] py-3.5 px-[18px] flex items-center gap-x-[13px]">
      <img src={searchImage} alt="search image" loading="lazy" />
      <input
        className="w-full outline-none text-search-color"
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Поиск..."
      />
    </div>
  );
};

export default Search;
