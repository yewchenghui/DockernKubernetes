# Specify a base image
FROM alpine

# Run some commands to install additional programs
# Required to install NodeJS + NodeJS npm
RUN apk add --update nodejs nodejs-npm

# Changes the working directory within the container
WORKDIR /usr/app

# Copy package.json to container (Dependencies)
COPY ./package.json ./

# Run some commands to install additional programs
RUN npm install

# Copy index.js to container (Flexible changes to avoid dependencies rebuilding)
COPY ./ ./

# Specify a command to run on container setup
CMD ["npm", "start"]