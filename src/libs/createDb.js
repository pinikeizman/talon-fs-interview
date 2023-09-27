const pg = require("pg");

const client = new pg.Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

(async function createDb() {
  await client.connect();

  const res = await client.query(
    `SELECT datname FROM pg_catalog.pg_database WHERE datname = '${process.env.POSTGRES_DBNAME}'`,
  );

  if (res.rowCount === 0) {
    await client.query(`CREATE DATABASE "${process.env.POSTGRES_DBNAME}";`);
    console.info(`created database ${process.env.POSTGRES_DBNAME}.`);
  } else {
    console.info(`${process.env.POSTGRES_DBNAME} database already exists.`);
  }

  await client.end();

  console.info("Connection has been established successfully.");
})();
