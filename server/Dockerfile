#Base Image
FROM node:14

#Setting Working Directory
#WORKDIR /the/workdir/path

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "node","index.js" ]