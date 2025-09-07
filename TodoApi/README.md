# TodoApi - ASP.NET Core 9 GraphQL API

A modern task management API built with ASP.NET Core 9, GraphQL (HotChocolate), and Entity Framework Core with SQL Server.

## Features

- **GraphQL API** with HotChocolate
- **Entity Framework Core** with SQL Server
- **Structured Logging** with Serilog
- **Task Management** with CRUD operations
- **Error Handling** with custom GraphQL error filter

## Project Structure

```
TodoApi/
├── Models/
│   └── TaskItem.cs          # Task entity and TaskStatus enum
├── Data/
│   └── AppDbContext.cs      # EF Core DbContext
├── GraphQL/
│   ├── Query.cs             # GraphQL queries
│   ├── Mutation.cs          # GraphQL mutations
│   ├── ErrorFilter.cs       # Custom error handling
│   └── Queries.graphql      # Sample GraphQL queries
├── Database/
│   └── Schema.sql           # Database schema
└── Program.cs               # Application configuration
```

## Getting Started

### Prerequisites

- .NET 9.0 SDK
- SQL Server (LocalDB or full instance)
- Visual Studio 2022 or VS Code

### Installation

1. Clone the repository
2. Restore packages:
   ```bash
   dotnet restore
   ```

3. Update the connection string in `appsettings.json` if needed:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=TodoApiDb;Trusted_Connection=true;MultipleActiveResultSets=true"
   }
   ```

4. Run the application:
   ```bash
   dotnet run
   ```

The API will be available at:
- GraphQL endpoint: `https://localhost:7xxx/graphql`
- GraphQL Playground: `https://localhost:7xxx/graphql/playground`

## GraphQL Schema

### Task Model

```graphql
type TaskItem {
  id: Int!
  title: String!
  description: String
  status: TaskStatus!
  createdAt: DateTime!
  updatedAt: DateTime
}

enum ApiTaskStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
  CANCELLED
}
```

### Queries

- `getAllTasks`: Get all tasks with filtering and sorting
- `getTaskById(id: Int!)`: Get a specific task by ID

### Mutations

- `createTask(title: String!, description: String, status: ApiTaskStatus!)`: Create a new task
- `updateTaskStatus(id: Int!, status: ApiTaskStatus!)`: Update task status
- `updateTask(id: Int!, title: String, description: String, status: ApiTaskStatus)`: Update task
- `deleteTask(id: Int!)`: Delete a task

## Example Queries

### Get All Tasks
```graphql
query {
  getAllTasks {
    id
    title
    description
    status
    createdAt
  }
}
```

### Create a New Task
```graphql
mutation {
  createTask(
    title: "Learn GraphQL"
    description: "Complete GraphQL tutorial"
    status: PENDING
  ) {
    id
    title
    status
  }
}
```

### Update Task Status
```graphql
mutation {
  updateTaskStatus(id: 1, status: COMPLETED) {
    id
    title
    status
    updatedAt
  }
}
```

## Database

The application uses Entity Framework Core with SQL Server. The database will be automatically created when you first run the application.

### Schema

The `Tasks` table includes:
- `Id` (Primary Key, Identity)
- `Title` (Required, Max 200 characters)
- `Description` (Optional, Max 2000 characters)
- `Status` (Required, Integer enum)
- `CreatedAt` (Required, DateTime)
- `UpdatedAt` (Optional, DateTime)

## Logging

The application uses Serilog for structured logging. Logs are written to the console with timestamps and structured data.

## Error Handling

Custom GraphQL error filter handles exceptions and provides meaningful error messages to clients.

## Development

### Adding New Features

1. Update the `TaskItem` model if needed
2. Add new resolvers to `Query.cs` or `Mutation.cs`
3. Update the database context if schema changes
4. Test with GraphQL Playground

### Database Migrations

If you need to create migrations:

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## API Testing

Use the GraphQL Playground at `https://localhost:7xxx/graphql/playground` to test your queries and mutations interactively.

## License

This project is licensed under the MIT License.
