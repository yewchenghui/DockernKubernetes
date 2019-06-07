# redis-image
**Requires Docker to be installed**

This folder contains the basic Dockerfile for building a basic image of Redis-Server, with a base using Alpine.

Added GCC within the Dockerfile as a second dependency, as concept. (Not required for Redis)

## Building the image
Within PowerShell / Git Bash / Terminal:
(Ensure that the working directory is changed to this directory)
```
docker build .
```

If you want to tag the image, you can use:
```
docker build -t <your Docker ID>/redis-image:latest .
```

## Executing the image
You should have a long ID generated. Copy it and run the following command.
```
docker run <image ID>
```

Alternatively (if you have tagged your image earlier)
```
docker run <tagged name>
```