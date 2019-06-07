# Specify a base image
FROM node:alpine

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