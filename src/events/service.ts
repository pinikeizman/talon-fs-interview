import { EventTypes, Event } from "@/types";
import { Op } from "sequelize";
import EventORM from "./models";

export async function findAll(params: {
  limit: number;
  offset: number;
  eventTypeFilter?: EventTypes[];
}): Promise<{ count: number; rows: Event[] }> {
  const { count, rows } = await EventORM.findAndCountAll({
    limit: params.limit,
    offset: params.offset,
    order: [["time", "DESC"]],
    where:
      params?.eventTypeFilter && params?.eventTypeFilter.length
        ? {
            eventType: {
              [Op.or]: params.eventTypeFilter,
            },
          }
        : {},
  });
  return {
    count,
    rows: rows.map((e) => ({
      ...e.dataValues,
      user: {
        email: e.dataValues.userEmail,
        name: e.dataValues.userName,
      },
    })),
  };
}
