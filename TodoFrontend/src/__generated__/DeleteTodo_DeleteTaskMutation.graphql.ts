/**
 * @generated SignedSource<<6172e2d1143677016bb9c1c0676e4e02>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteTodo_DeleteTaskMutation$variables = {
  id: string;
};
export type DeleteTodo_DeleteTaskMutation$data = {
  readonly deleteTask: boolean | null | undefined;
};
export type DeleteTodo_DeleteTaskMutation = {
  response: DeleteTodo_DeleteTaskMutation$data;
  variables: DeleteTodo_DeleteTaskMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
      }
    ],
    "kind": "ScalarField",
    "name": "deleteTask",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTodo_DeleteTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTodo_DeleteTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8026bed0702390cfa05ed3e7a826d705",
    "id": null,
    "metadata": {},
    "name": "DeleteTodo_DeleteTaskMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTodo_DeleteTaskMutation(\n  $id: ID!\n) {\n  deleteTask(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "5bb3f29aebd6c7f3321de0a2ab6d5603";

export default node;
