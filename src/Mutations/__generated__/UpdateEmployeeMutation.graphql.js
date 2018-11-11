/**
 * @flow
 * @relayHash 0f039c9963248ed2d20b90309ef0576c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EmployeeMutationInput = {
  fullName?: ?string,
  fullAddress?: ?string,
  salary?: ?string,
  employeeId: string,
  clientMutationId?: ?string,
};
export type UpdateEmployeeMutationVariables = {|
  input: EmployeeMutationInput
|};
export type UpdateEmployeeMutationResponse = {|
  +updateEmployee: ?{|
    +employee: ?{|
      +id: string,
      +fullName: string,
      +fullAddress: string,
      +salary: string,
    |}
  |}
|};
export type UpdateEmployeeMutation = {|
  variables: UpdateEmployeeMutationVariables,
  response: UpdateEmployeeMutationResponse,
|};
*/


/*
mutation UpdateEmployeeMutation(
  $input: EmployeeMutationInput!
) {
  updateEmployee(input: $input) {
    employee {
      id
      fullName
      fullAddress
      salary
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EmployeeMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateEmployee",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "EmployeeMutationInput!"
      }
    ],
    "concreteType": "EmployeeMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "employee",
        "storageKey": null,
        "args": null,
        "concreteType": "Employee",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "fullName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "fullAddress",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "salary",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateEmployeeMutation",
  "id": null,
  "text": "mutation UpdateEmployeeMutation(\n  $input: EmployeeMutationInput!\n) {\n  updateEmployee(input: $input) {\n    employee {\n      id\n      fullName\n      fullAddress\n      salary\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateEmployeeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateEmployeeMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c98ef95532c6bfa83c8d1384f5ec58f1';
module.exports = node;
