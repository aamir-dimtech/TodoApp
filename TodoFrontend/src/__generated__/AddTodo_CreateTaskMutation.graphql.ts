/**
 * @generated SignedSource<<1dc94253cfc3ef9b1705a09980bc2160>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ApiTaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type AddTodo_CreateTaskMutation$variables = {
  description?: string | null | undefined;
  status: ApiTaskStatus;
  title: string;
};
export type AddTodo_CreateTaskMutation$data = {
  readonly createTask: {
    readonly description: string | null | undefined;
    readonly id: string;
    readonly status: ApiTaskStatus;
    readonly title: string;
  };
};
export type AddTodo_CreateTaskMutation = {
  response: AddTodo_CreateTaskMutation$data;
  variables: AddTodo_CreateTaskMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "status"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "status",
        "variableName": "status"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "createTask",
    "plural": false,
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddTodo_CreateTaskMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddTodo_CreateTaskMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "9f58e8cb61e9d20dc847722d33ddd40b",
    "id": null,
    "metadata": {},
    "name": "AddTodo_CreateTaskMutation",
    "operationKind": "mutation",
    "text": "mutation AddTodo_CreateTaskMutation(\n  $title: String!\n  $description: String\n  $status: ApiTaskStatus!\n) {\n  createTask(title: $title, description: $description, status: $status) {\n    id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "c2166531d79bedf10fe203091bbb404d";

export default node;
