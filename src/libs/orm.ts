import { Sequelize } from "sequelize";
import * as pg from "pg";

import { config } from "@/config";
export const sequelize = new Sequelize(
  `postgres://` +
    `${config.POSTGRES_USER}:${config.POSTGRES_PASSWORD}@${config.POSTGRES_HOST}` +
    `:${config.POSTGRES_PORT}/${config.POSTGRES_DBNAME}`,
  { dialectModule: pg },
);

export async function getSequelize() {
  await sequelize.authenticate();
  return sequelize;
}
