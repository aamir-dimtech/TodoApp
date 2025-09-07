import { Provider, defaultTheme, Flex } from "@adobe/react-spectrum";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "./relayEnvironment";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Provider theme={defaultTheme}>
        <h1>Todo App</h1>
        <AddTodo />
        <Flex direction="column">
          <TodoList />
        </Flex>
      </Provider>
    </RelayEnvironmentProvider>
  );
}
