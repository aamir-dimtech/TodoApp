import { useState } from "react";
import {
  Heading,
  DialogTrigger,
  Dialog,
  ActionButton,
  Button,
  TextField,
  Divider,
  Content,
  Footer,
  ButtonGroup,
  Flex,
  TextArea,
} from "@adobe/react-spectrum";
import { useMutation } from "react-relay";
import { graphql } from "react-relay";
import type { AddTodo_CreateTaskMutation } from "../__generated__/AddTodo_CreateTaskMutation.graphql.js";

const createTaskMutation = graphql`
  mutation AddTodo_CreateTaskMutation(
    $title: String!
    $description: String
    $status: ApiTaskStatus!
  ) {
    createTask(title: $title, description: $description, status: $status) {
      id
      title
      description
      status
    }
  }
`;

export default function AddTodo() {
  const [commit] = useMutation<AddTodo_CreateTaskMutation>(createTaskMutation);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (close: () => void) => {
    commit({
      variables: {
        title,
        description,
        status: "PENDING",
      },
      onCompleted: () => {
        setTitle("");
        setDescription("");
        close();
      },
      updater: (store, data) => {
        // Add the new task to the cache
        if (data?.createTask) {
          const root = store.getRoot();
          const tasks = root.getLinkedRecords("getAllTasks") || [];
          const newTask = store.get(data.createTask.id);
          if (newTask) {
            root.setLinkedRecords([...tasks, newTask], "getAllTasks");
          }
        }
      },
    });
  };

  return (
    <DialogTrigger>
      <ActionButton>Add Todo</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Add Todo</Heading>
          <Divider />
          <Content>
            <Flex direction={"column"}>
              <TextField
                label="Title"
                value={title}
                onChange={setTitle}
                isRequired
                width={"full"}
              />
              <TextArea 
                label="Description"
                value={description}
                onChange={setDescription}
                width={"full"}
              />
            </Flex>
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
                onPress={() => handleSubmit(close)}
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
