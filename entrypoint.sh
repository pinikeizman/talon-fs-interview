#!/bin/bash

echo "Starting server"
node src/libs/createDb.js
DB_URL=postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST/$POSTGRES_DBNAME
TALON_DB_URL=$DB_URL$POSTGRES_DBNAME
npx sequelize-cli db:migrate --url $DB_URL --migrations-path src/migrations/migrations 
case $1 in
  dev)
    npm run dev
    ;;

  start)
    npm run start
    ;;
esac