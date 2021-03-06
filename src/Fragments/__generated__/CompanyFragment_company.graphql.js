/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type EmployeeRowFragment_employee$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CompanyFragment_company$ref: FragmentReference;
export type CompanyFragment_company = {|
  +id: string,
  +name: ?string,
  +topEarners: ?$ReadOnlyArray<{|
    +id: string,
    +$fragmentRefs: EmployeeRowFragment_employee$ref,
  |}>,
  +$refType: CompanyFragment_company$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CompanyFragment_company",
  "type": "Company",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "topEarners",
      "storageKey": null,
      "args": null,
      "concreteType": "Employee",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "FragmentSpread",
          "name": "EmployeeRowFragment_employee",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b270092b2342ba2118d1dfc215ebf93e';
module.exports = node;
