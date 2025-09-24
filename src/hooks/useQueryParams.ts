import { useSearchParams } from "react-router";

function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const categoryQuery = searchParams.get("c");

  const query = { searchQuery, categoryQuery };

  return { query, setSearchParams };
}

export default useQueryParams;
