# Todo List Application: Development Methodology

This document outlines the development approach, tooling, and AI-assisted methodologies used to create this Todo List application.

---

## Development Approach

The project followed a **component-based, bottom-up development strategy**. The initial focus was on creating smaller, self-contained components. These foundational elements were then progressively integrated to build more complex features and functionalities. This granular approach ensured that each part of the application was robust and modular before being combined into the final product.

---

## AI-Assisted Tooling

A multi-model AI strategy was employed to leverage the specific strengths of different language models for various development tasks. The primary development environment was **WindSurf**, which served as the central platform for orchestrating the different AI models and tools.

### Model Utilization

The following models were used for distinct purposes:

* **SWE-1**: Utilized for granular, code-specific tasks and version control operations. Its primary application was managing Git commits through the `git MCP` (Model-Controlled Push) process, ensuring streamlined and consistent updates to the repository.
* **DeepSeek v3**: Employed for tasks requiring in-depth reasoning and system configuration. A key use case was the setup and configuration of the Docker environment on the development machine, where its analytical capabilities ensured a correct and efficient installation.
* **Claude 4**: Reserved for complex, high-level tasks that required a comprehensive understanding of the application's architecture and logic.

### Project Scaffolding and Generation

The initial project structure was generated using a combination of AI tools to accelerate development:

1.  **Cursor AI**: The foundational ASP.NET project was scaffolded using Cursor AI, which provided the initial boilerplate code and project file structure.
2.  **ChatGPT**: To integrate the ASP.NET project with the Cursor environment, ChatGPT was used to generate the necessary `.cursorrules` file. This file defined the specific rules and configurations for the project.
3.  **Project Completion**: With the configuration in place, the entire application was generated from a single, comprehensive prompt, leveraging the predefined rules and project structure.

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
