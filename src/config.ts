type AppContext = {
  // DB connection
  POSTGRES_PASSWORD: string;
  POSTGRES_DBNAME: string;
  POSTGRES_HOST: string;
  POSTGRES_USER: string;
  POSTGRES_PORT: number;
};

export const config: AppContext = {
  POSTGRES_HOST: "localhost",
  POSTGRES_USER: "postgres",
  POSTGRES_PORT: 5432,
  POSTGRES_DBNAME: "talon",
  ...(process.env as any),
};
