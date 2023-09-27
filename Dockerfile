FROM node:lts-alpine as dev

WORKDIR /workspace

COPY package.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "sh", "entrypoint.sh"]
CMD [ "dev" ]

FROM dev as prod
RUN npm run build
WORKDIR /app
RUN cp -r /workspace/.next /app/.next
RUN cp -r /workspace/node_modules /app/node_modules
RUN cp -r /workspace/package.json /app/package.json
RUN cp -r /workspace/entrypoint.sh /app/entrypoint.sh
RUN mkdir -p /app/src/libs/
RUN cp /workspace/src/libs/createDb.js /app/src/libs/createDb.js
RUN cp /workspace/src/libs/data.json /app/src/libs/data.json
RUN cp -r /workspace/src/migrations/ /app/src/migrations/
RUN rm -rf /workspace

CMD [ "start" ]


