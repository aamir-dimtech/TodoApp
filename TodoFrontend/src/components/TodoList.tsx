import { useLazyLoadQuery } from 'react-relay';
import { TableView, TableHeader, TableBody, Column, Row, Cell } from '@react-spectrum/table';
import { graphql } from 'react-relay';
import type { TodoList_GetAllTasksQuery } from '../__generated__/TodoList_GetAllTasksQuery.graphql.js';
import StatusToggle from './StatusToggle';
import DeleteTodo from './DeleteTodo';

const getAllTasksQuery = graphql`
  query TodoList_GetAllTasksQuery {
    getAllTasks {
      id
      title
      description
      status
    }
  }
`;

export default function TodoList() {
  const data = useLazyLoadQuery<TodoList_GetAllTasksQuery>(
    getAllTasksQuery,
    {}
  );

  return (
    <TableView width="full">
      <TableHeader>
        <Column>Title</Column>
        <Column>Description</Column>
        <Column>Status</Column>
        <Column>Actions</Column>
      </TableHeader>
      <TableBody>
        {data.getAllTasks?.map((task) => (
          <Row key={task.id}>
            <Cell>{task.title}</Cell>
            <Cell>{task.description}</Cell>
            <Cell>
              <StatusToggle id={task.id} currentStatus={task.status} />
            </Cell>
            <Cell>
              <DeleteTodo id={task.id} />
            </Cell>
          </Row>
        ))}
      </TableBody>
    </TableView>
  );
}
