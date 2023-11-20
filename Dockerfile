FROM node:14-alpine
COPY . .
RUN npm build
ENTRYPOINT [ "npm","start" ]
