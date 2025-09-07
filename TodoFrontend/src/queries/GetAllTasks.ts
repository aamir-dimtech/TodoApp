import { graphql } from 'react-relay';

export const getAllTasksQuery = graphql`
  query GetAllTasksQuery {
    getAllTasks {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
