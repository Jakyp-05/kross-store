import { setSearchQuery } from "../redux/getProducts/slice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const useSearch = () => {
  const dispatch = useAppDispatch();
  const { searchQuery } = useAppSelector((state) => state.products);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };
  return {searchQuery, handleSearch};
};

export default useSearch;
