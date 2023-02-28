import { useState } from "react";
import { useCallback } from "react";
import { FilterType } from "../../../types";

export const useFilter = () => {
  const [filterParam, setFilterParam] = useState({
    sortBy: "popularity",
    sortType: "desc",
  });

  const sendData = useCallback(
    (data: FilterType) => {
      setFilterParam({
        ...filterParam,
        ...data,
      });
    },
    [filterParam]
  );

  return { filterParam, sendData };
};
