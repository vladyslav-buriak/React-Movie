import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { memo } from "react";

interface IPaginationProps {
  currentPage: number;
  pages: any;
  onPageChange: (e: React.ChangeEvent<unknown>, p: number) => void;
}
export const PaginationRounded: React.FC<IPaginationProps> = ({
  currentPage,
  pages,
  onPageChange,
}) => {
  return (
    <Stack spacing={2}>
      <Pagination
        page={currentPage}
        count={pages}
        shape="rounded"
        onChange={onPageChange}
      />
    </Stack>
  );
};
