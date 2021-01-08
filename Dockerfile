FROM node:14-alpine

# if node image does not include netcat
# RUN apt-get -q update && apt-get -qy install netcat
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# typescript only
COPY tsconfig.json ./

USER node

RUN npm install
# typescript only
# RUN npm run build
# RUN npm install nodemon -g --quiet
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]