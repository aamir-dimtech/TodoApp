using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<TaskItem> Tasks { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<TaskItem>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Title)
                .IsRequired()
                .HasMaxLength(200);
            entity.Property(e => e.Description)
                .HasMaxLength(2000);
            entity.Property(e => e.Status)
                .IsRequired()
                .HasConversion<int>();
            entity.Property(e => e.CreatedAt)
                .IsRequired();
        });

        // Seed some initial data
        modelBuilder.Entity<TaskItem>().HasData(
            new TaskItem
            {
                Id = 1,
                Title = "Sample Task 1",
                Description = "This is a sample task for testing",
                Status = ApiTaskStatus.Pending,
                CreatedAt = DateTime.UtcNow
            },
            new TaskItem
            {
                Id = 2,
                Title = "Sample Task 2",
                Description = "Another sample task",
                Status = ApiTaskStatus.Completed,
                CreatedAt = DateTime.UtcNow
            }
        );
    }
}
