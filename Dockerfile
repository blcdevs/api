FROM node:18-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install -g @nestjs/cli

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:18-alpine as production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist/* ./dist/

CMD ["node", "dist/main"]
