# simpleNodeJSWebApp (Built from Scratch using Alpine)
**Requires Docker to be installed**

This folder contains the necessary files for building a basic NodeJS Web App within Docker, with a base using Alpine.

Runs with the pre-assigned command:
```
node index.js
```

Consists of the following files:
- package.json
- index.js
- Dockerfile

## Potential Issues
#### A) If you get an error such as EAI_AGAIN when building the image, this relates to an internal Docker DNS error.

Solution:
Go to Docker > Settings > Daemon > Switch to Advanced and change the configuration to this. (Using Google DNS)
```
{
  "registry-mirrors": [],
  "insecure-registries": [],
  "debug": true,
  "experimental": false
  "dns": [
    "8.8.8.8"
  ]
}
```

#### B) Docker Daemon Settings GUI does not reflect applied changes.

Solution:
Go to C:\users\<username>\AppData\Roaming\Docker and check settings.json.
Check if the DNS is reflected. If not, restart Docker and try again.

Alternatively (Not recommended, best not to edit directly):
Insert the following lines into settings.json.
```
  "useDnsForwarder": true,
  "dns": "8.8.8.8",
```

## Building the image
Within PowerShell / Git Bash / Terminal:
(Ensure that the working directory is changed to this directory)
```
docker build .
```

If you want to tag the image, you can use:
```
docker build -t <your Docker ID>/simpleNodeJSWebApp:latest .
```

## Executing the image
You should have a long ID generated. Copy it and run the following command.
```
docker run -p 8081:8085 <image ID>
```

Alternatively (if you have tagged your image earlier)
```
docker run -p 8081:8085 <tagged name>
```

To check if it is running, open up your favourite browser on the host machine and launch:
```
localhost:8081
```