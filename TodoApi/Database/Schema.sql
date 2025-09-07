-- Database Schema for TodoApi
-- This script creates the Tasks table as specified in the project requirements

CREATE TABLE [dbo].[Tasks] (
    [Id] INT IDENTITY(1,1) NOT NULL,
    [Title] NVARCHAR(200) NOT NULL,
    [Description] NVARCHAR(2000) NULL,
    [Status] INT NOT NULL,
    [CreatedAt] DATETIME2 NOT NULL,
    [UpdatedAt] DATETIME2 NULL,
    CONSTRAINT [PK_Tasks] PRIMARY KEY CLUSTERED ([Id] ASC)
);

-- Insert sample data
INSERT INTO [dbo].[Tasks] ([Title], [Description], [Status], [CreatedAt])
VALUES 
    ('Sample Task 1', 'This is a sample task for testing', 0, GETUTCDATE()),
    ('Sample Task 2', 'Another sample task', 1, GETUTCDATE());

-- Create indexes for better performance
CREATE NONCLUSTERED INDEX [IX_Tasks_Status] ON [dbo].[Tasks] ([Status]);
CREATE NONCLUSTERED INDEX [IX_Tasks_CreatedAt] ON [dbo].[Tasks] ([CreatedAt]);
