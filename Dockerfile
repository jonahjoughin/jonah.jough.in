FROM node:alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app

RUN npm install
# Bundle app source

COPY . /app

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "server" ]
