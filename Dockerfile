From node:17.9.1 as base

WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build

CMD ["npm","start"]