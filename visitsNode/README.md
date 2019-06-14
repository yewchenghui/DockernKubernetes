# visitsNode
**Requires Docker to be installed**

This folder contains the necessary files for building a basic Web App with Node and redis within Docker, using Dockerfile and docker-compose.

The main idea for this folder is to demonstrate the use of docker-compose to handle networking between 2 isolated containers, instead of using individual Docker CLIs to process.

## Building/Running the containers
Within PowerShell / Git Bash / Terminal:
(Ensure that the working directory is changed to this directory)
```
docker-compose up --build
```

## Testing if the containers work
Open up your favourite browser and navigate to the following:
```
localhost:4001
```
A webpage should be visible that shows the number of times the page has been visited.

## Shutting down the containers
Execute the following command.
```
docker-compose down
```
**Note that the counter will not save after executing this command. It will reset if the container is launched again.**