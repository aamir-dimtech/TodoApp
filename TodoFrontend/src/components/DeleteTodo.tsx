import {
  Heading,
  DialogTrigger,
  Dialog,
  ActionButton,
  Button,
  Divider,
  Content,
  Footer,
  ButtonGroup,
} from "@adobe/react-spectrum";
import { useMutation } from "react-relay";
import { graphql } from "react-relay";
import { useState } from "react";
import type { DeleteTodo_DeleteTaskMutation } from "../__generated__/DeleteTodo_DeleteTaskMutation.graphql.js";

const deleteTaskMutation = graphql`
  mutation DeleteTodo_DeleteTaskMutation($id: ID!) {
    deleteTask(id: $id)
  }
`;

export default function DeleteTodo({ id }: { id: string }) {
  const [commit] =
    useMutation<DeleteTodo_DeleteTaskMutation>(deleteTaskMutation);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    commit({
      variables: { id },
      onCompleted: () => {
        setIsOpen(false);
      },
      updater: (store) => {
        // Remove the deleted task from the cache
        const root = store.getRoot();
        const tasks = root.getLinkedRecords("getAllTasks");
        if (tasks) {
          const updatedTasks = tasks.filter(
            (task) => task?.getValue("id") !== id
          );
          root.setLinkedRecords(updatedTasks, "getAllTasks");
        }
      },
    });
  };

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
      <ActionButton>Delete</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Delete confirmation?</Heading>
          <Divider />
          <Content>
            <p>Are you sure you want to delete this task?</p>
          </Content>
          <Divider />
          <Footer>
            <ButtonGroup>
              <Button variant="secondary" onPress={close}>
                Cancel
              </Button>
              <Button
                variant="accent"
                type="submit"
                onPress={handleDelete}
              >
                Confirm
              </Button>
            </ButtonGroup>
          </Footer>
        </Dialog>
      )}
    </DialogTrigger>
  );
}
