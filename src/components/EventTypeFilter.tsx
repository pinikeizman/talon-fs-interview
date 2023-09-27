"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { EventTypes } from "@/types";
import { formatEventType } from "@/libs/utils";
import { useRouter, useSearchParams } from "next/navigation";

const options = Object.values(EventTypes).map((t) => ({
  type: t,
  name: formatEventType(t),
}));

export default function EventTypeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Autocomplete
      multiple
      id="controllable-states-demo"
      options={options}
      onChange={(e, selectedOptions) => {
        const nextSearchParams = new URLSearchParams(searchParams);
        nextSearchParams.delete("eventTypeFilter");
        selectedOptions.forEach((o) => {
          nextSearchParams.append("eventTypeFilter", o.type);
        });
        router.push("/?" + nextSearchParams.toString());
      }}
      getOptionLabel={(o) => o.name}
      sx={{ maxWidth: 400 }}
      renderInput={(params) => (
        <TextField {...params} label="Event Type Filter" />
      )}
    />
  );
}
