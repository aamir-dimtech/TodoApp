using HotChocolate.Execution;
using HotChocolate.Execution.Errors;

namespace TodoApi.GraphQL;

public class GraphQLErrorFilter : IErrorFilter
{
    public IError OnError(IError error)
    {
        // Log the error (you can inject ILogger here if needed)
        Console.WriteLine($"GraphQL Error: {error.Message}");

        // Handle specific error types
        return error.Exception switch
        {
            ArgumentException => error.WithMessage(error.Exception.Message),
            InvalidOperationException => error.WithMessage(error.Exception.Message),
            _ => error.WithMessage("An unexpected error occurred")
        };
    }
}
