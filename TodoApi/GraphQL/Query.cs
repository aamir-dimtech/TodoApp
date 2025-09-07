using Microsoft.EntityFrameworkCore;
using HotChocolate;
using HotChocolate.Types;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.GraphQL;

public class Query
{
    public IQueryable<TaskItem> GetGetAllTasks([Service] AppDbContext context)
    {
        return context.Tasks;
    }

    public async Task<TaskItem?> GetGetTaskById([GraphQLType(typeof(IdType))] string id, [Service] AppDbContext context)
    {
        if (!int.TryParse(id, out int taskId))
        {
            throw new ArgumentException($"Invalid ID format: {id}", nameof(id));
        }
        
        return await context.Tasks.FirstOrDefaultAsync(t => t.Id == taskId);
    }
}
