"use client";
import { Sevirity } from "@/types";
import { Chip, Typography } from "@mui/material";

export const Severity: React.FC<{ severityType: Sevirity }> = ({
  severityType,
}) => {
  return (
    <Chip
      sx={{ borderRadius: 1 }}
      size="small"
      color={
        severityType === Sevirity.HIGH
          ? "error"
          : severityType === Sevirity.MEDIUM
          ? "warning"
          : "info"
      }
      label={<Typography variant="overline">{severityType}</Typography>}
    />
  );
};
