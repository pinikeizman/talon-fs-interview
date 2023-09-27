import { EventTypes } from "@/types";

export const formatEventType = (eventType: EventTypes) =>
  eventType
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/^./, function (str) {
      return str.toUpperCase();
    });
