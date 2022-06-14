FROM alpine

WORKDIR /usr/app/

RUN apk add --update nodejs npm 

COPY ./package.json ./

RUN npm install

COPY ./src ./

CMD [ "node", "index.js" ]