/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EmployeeRowFragment_employee$ref: FragmentReference;
export type EmployeeRowFragment_employee = {|
  +id: string,
  +fullName: string,
  +fullAddress: string,
  +salary: string,
  +isAdmin: boolean,
  +company: {|
    +name: ?string
  |},
  +department: {|
    +name: ?string
  |},
  +$refType: EmployeeRowFragment_employee$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "EmployeeRowFragment_employee",
  "type": "Employee",
  "metadata": null,
  "argumentDefinitions": [],
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isAdmin",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "company",
      "storageKey": null,
      "args": null,
      "concreteType": "Company",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "department",
      "storageKey": null,
      "args": null,
      "concreteType": "Department",
      "plural": false,
      "selections": v0
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '43bb25f00e67c854e4205d16de3eeaed';
module.exports = node;
