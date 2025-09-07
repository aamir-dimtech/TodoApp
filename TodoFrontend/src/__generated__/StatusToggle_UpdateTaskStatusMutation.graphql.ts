/**
 * @generated SignedSource<<c48493c53c31131f9c2b657265bbbf19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ApiTaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type StatusToggle_UpdateTaskStatusMutation$variables = {
  id: string;
  status: ApiTaskStatus;
};
export type StatusToggle_UpdateTaskStatusMutation$data = {
  readonly updateTaskStatus: {
    readonly id: string;
    readonly status: ApiTaskStatus;
  };
};
export type StatusToggle_UpdateTaskStatusMutation = {
  response: StatusToggle_UpdateTaskStatusMutation$data;
  variables: StatusToggle_UpdateTaskStatusMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "status"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "status",
        "variableName": "status"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "updateTaskStatus",
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
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "StatusToggle_UpdateTaskStatusMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StatusToggle_UpdateTaskStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dfbc4622eb9b40a75b09a1d02599de31",
    "id": null,
    "metadata": {},
    "name": "StatusToggle_UpdateTaskStatusMutation",
    "operationKind": "mutation",
    "text": "mutation StatusToggle_UpdateTaskStatusMutation(\n  $id: ID!\n  $status: ApiTaskStatus!\n) {\n  updateTaskStatus(id: $id, status: $status) {\n    id\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "84b24f685564da79574260bdc26f8fc6";

export default node;
