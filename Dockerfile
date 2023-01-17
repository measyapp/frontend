FROM node:18-alpine

WORKDIR /usr/src/app-web

COPY package.json /usr/src/app-web/

RUN npm install  

EXPOSE 3030

RUN chown -R node:node /usr/src/app-web/node_modules

CMD ["npm", "run", "dev","--","--host"]
