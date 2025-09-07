/**
 * @generated SignedSource<<c7191457d0f881889346212fb02316c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ApiTaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type TodoList_GetAllTasksQuery$variables = Record<PropertyKey, never>;
export type TodoList_GetAllTasksQuery$data = {
  readonly getAllTasks: ReadonlyArray<{
    readonly description: string | null | undefined;
    readonly id: string;
    readonly status: ApiTaskStatus;
    readonly title: string;
  }>;
};
export type TodoList_GetAllTasksQuery = {
  response: TodoList_GetAllTasksQuery$data;
  variables: TodoList_GetAllTasksQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "getAllTasks",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoList_GetAllTasksQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoList_GetAllTasksQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "637e88d2cf72ad50a58d2b79fe95523d",
    "id": null,
    "metadata": {},
    "name": "TodoList_GetAllTasksQuery",
    "operationKind": "query",
    "text": "query TodoList_GetAllTasksQuery {\n  getAllTasks {\n    id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "600aa784e77544bd0b5fa68eae55f2c5";

export default node;
