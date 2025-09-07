import { ComboBox, Item } from '@adobe/react-spectrum';
import { useMutation } from 'react-relay';
import { graphql } from 'react-relay';
import type { StatusToggle_UpdateTaskStatusMutation } from '../__generated__/StatusToggle_UpdateTaskStatusMutation.graphql.js';

const updateTaskStatusMutation = graphql`
  mutation StatusToggle_UpdateTaskStatusMutation(
    $id: ID!
    $status: ApiTaskStatus!
  ) {
    updateTaskStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;

export default function StatusToggle({ id, currentStatus }: { id: string, currentStatus: string }) {
  const [commit] = useMutation<StatusToggle_UpdateTaskStatusMutation>(updateTaskStatusMutation);

  const handleStatusChange = (selectedStatus: string) => {
    if (selectedStatus !== currentStatus) {
      commit({ 
        variables: { id, status: selectedStatus as 'PENDING' | 'COMPLETED' }
      });
    }
  };

  return (
    <ComboBox
      selectedKey={currentStatus}
      onSelectionChange={(key) => handleStatusChange(key as string)}
      width="size-1800"
    >
      <Item key="PENDING">PENDING</Item>
      <Item key="COMPLETED">COMPLETED</Item>
    </ComboBox>
  );
}
