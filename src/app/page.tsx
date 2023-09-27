import EventsTable from "@/components/EventsTable";
import ThemeProvider from "../components/ThemeProvider";
import { Paper, Stack, Typography } from "@mui/material";
import EventTypeFilter from "@/components/EventTypeFilter";
import { findAll } from "@/events/service";
import { EventTypes } from "@/types";
import "@fontsource/roboto/300.css";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const {
    limit: limitString = "10",
    offset: offsetString = "0",
    eventTypeFilter = [],
  } = searchParams;
  const limit = Number.parseInt(limitString as string);
  const offset = Number.parseInt(offsetString as string);
  const { rows, count } = await findAll({
    limit,
    offset,
    eventTypeFilter: (Array.isArray(eventTypeFilter)
      ? eventTypeFilter
      : [eventTypeFilter]) as EventTypes[],
  });

  return (
    <ThemeProvider>
      <Paper
        sx={{
          mx: 25,
          my: 4,
        }}
      >
        <Stack p={2} spacing={1.825}>
          <Typography variant="subtitle1">Events Table</Typography>
          <EventTypeFilter />
        </Stack>
        <EventsTable data={rows} limit={limit} offset={offset} total={count} />
      </Paper>
    </ThemeProvider>
  );
}
