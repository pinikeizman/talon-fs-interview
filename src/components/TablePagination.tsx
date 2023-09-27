"use client";
import { TablePagination, TablePaginationProps } from "@mui/material";
import { redirect, useRouter, useSearchParams } from "next/navigation";

export const Pagination: React.FC<
  Omit<TablePaginationProps, "onPageChange" | "onRowsPerPageChange">
> = (props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <TablePagination
      component="div"
      {...props}
      onPageChange={(_, page) => {
        const nextSearchParams = new URLSearchParams(searchParams);
        nextSearchParams.set(
          "offset",
          Math.min(
            props.count,
            Number.parseInt(nextSearchParams.get("limit") || "10") * page,
          ).toString(),
        );
        router.push("/?" + nextSearchParams);
      }}
      onRowsPerPageChange={(e) => {
        const nextSearchParams = new URLSearchParams(searchParams);
        nextSearchParams.set("limit", e.target.value);
        router.push("/?" + nextSearchParams);
      }}
    />
  );
};
