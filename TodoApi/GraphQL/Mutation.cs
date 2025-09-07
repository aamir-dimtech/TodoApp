using Microsoft.EntityFrameworkCore;
using HotChocolate;
using HotChocolate.Types;
using TodoApi.Data;
using TodoApi.Models;
using ApiTaskStatus = TodoApi.Models.ApiTaskStatus;

namespace TodoApi.GraphQL;

public class Mutation
{
    public async Task<TaskItem> CreateTask(
        string title,
        string? description,
        ApiTaskStatus status,
        [Service] AppDbContext context)
    {
        if (string.IsNullOrWhiteSpace(title))
        {
            throw new ArgumentException("Title cannot be empty", nameof(title));
        }

        var task = new TaskItem
        {
            Title = title.Trim(),
            Description = description?.Trim(),
            Status = status,
            CreatedAt = DateTime.UtcNow
        };

        context.Tasks.Add(task);
        await context.SaveChangesAsync();

        return task;
    }

    public async Task<TaskItem?> UpdateTaskStatus(
        [GraphQLType(typeof(IdType))] string id,
        ApiTaskStatus status,
        [Service] AppDbContext context)
    {
        if (!int.TryParse(id, out int taskId))
        {
            throw new ArgumentException($"Invalid ID format: {id}", nameof(id));
        }
        
        var task = await context.Tasks.FirstOrDefaultAsync(t => t.Id == taskId);
        
        if (task == null)
        {
            throw new ArgumentException($"Task with ID {id} not found", nameof(id));
        }

        task.Status = status;
        task.UpdatedAt = DateTime.UtcNow;

        await context.SaveChangesAsync();

        return task;
    }

    public async Task<TaskItem?> UpdateTask(
        [GraphQLType(typeof(IdType))] string id,
        string? title,
        string? description,
        ApiTaskStatus? status,
        [Service] AppDbContext context)
    {
        if (!int.TryParse(id, out int taskId))
        {
            throw new ArgumentException($"Invalid ID format: {id}", nameof(id));
        }
        
        var task = await context.Tasks.FirstOrDefaultAsync(t => t.Id == taskId);
        
        if (task == null)
        {
            throw new ArgumentException($"Task with ID {id} not found", nameof(id));
        }

        if (!string.IsNullOrWhiteSpace(title))
        {
            task.Title = title.Trim();
        }

        if (description != null)
        {
            task.Description = string.IsNullOrWhiteSpace(description) ? null : description.Trim();
        }

        if (status.HasValue)
        {
            task.Status = status.Value;
        }

        task.UpdatedAt = DateTime.UtcNow;

        await context.SaveChangesAsync();

        return task;
    }

    public async Task<bool> DeleteTask(
        [GraphQLType(typeof(IdType))] string id,
        [Service] AppDbContext context)
    {
        if (!int.TryParse(id, out int taskId))
        {
            throw new ArgumentException($"Invalid ID format: {id}", nameof(id));
        }
        
        var task = await context.Tasks.FirstOrDefaultAsync(t => t.Id == taskId);
        
        if (task == null)
        {
            return false;
        }

        context.Tasks.Remove(task);
        await context.SaveChangesAsync();

        return true;
    }
}
