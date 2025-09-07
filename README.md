# TodoApp

A simple todo application with GraphQL API

## Docker Commands

### Backend (TodoApi)

#### Build the image
```bash
docker build -t todo-api -f TodoApi/Dockerfile .
```

#### Run the container
```bash
docker run -p 8080:8080 -p 8081:8081 todo-api
```

### Frontend (TodoFrontend)

#### Build the image
```bash
docker build -t todo-frontend -f TodoFrontend/Dockerfile ./TodoFrontend
```

#### Run the container
```bash
docker run -p 3000:80 todo-frontend
```

### Docker Compose (Run both services)

The `docker-compose.yml` file is already created at the root directory and run this command to run both services in detached mode
```bash
docker compose up --build -d
```