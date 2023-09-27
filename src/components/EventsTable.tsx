import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import { Event, Sevirity } from "@/types";
import User from "./User";
import { Pagination } from "./TablePagination";
import { Severity } from "./Severity";
import { formatEventType } from "@/libs/utils";

type ColDef<T> = {
  header: string;
  accessorKey: keyof T;
  cell?: (v: any, e: T) => ReactNode;
};

const columns: ColDef<Event>[] = [
  {
    accessorKey: "eventType",
    header: "Event Type",
    cell: formatEventType,
  },
  {
    accessorKey: "severity",
    header: "Severity",
    cell: (v: Sevirity) => <Severity severityType={v} />,
  },
  {
    accessorKey: "user",
    header: "User",
    cell: User,
  },

  {
    accessorKey: "time",
    header: "Date",
    cell: (v: Date) => {
      const parts = v.toISOString().split("T");
      return (
        <Typography variant="caption">
          {parts[0].replaceAll("-", "/") + " | " + parts[1].slice(0, 8)}
        </Typography>
      );
    },
  },
];

export default function EventsTable({
  data,
  total,
  limit,
  offset,
}: {
  data: Event[];
  total: number;
  offset: number;
  limit: number;
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer className="EventsTableContainer">
        <Table aria-label="events table" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((c) => (
                <TableCell key={c.accessorKey}>{c.header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, i) => {
              return (
                <TableRow key={i}>
                  {columns.map((col) => {
                    return (
                      <TableCell key={col.accessorKey}>
                        {col.cell
                          ? col.cell(row[col.accessorKey], row)
                          : row[col.accessorKey]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack>
        <Pagination
          rowsPerPageOptions={[5, 10, 25]}
          count={total}
          rowsPerPage={limit}
          page={Math.round(offset / limit)}
        />
      </Stack>
    </Box>
  );
}
