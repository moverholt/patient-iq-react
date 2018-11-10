/**
 * @flow
 * @relayHash 7d65cc7042c85477327b498dea80ffc3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CompanyFragment_company$ref = any;
type EmployeeFragment_employee$ref = any;
export type CurrentUserQueryRendererQueryVariables = {||};
export type CurrentUserQueryRendererQueryResponse = {|
  +currentUser: ?{|
    +id: string,
    +email: string,
    +employee: ?{|
      +$fragmentRefs: EmployeeFragment_employee$ref
    |},
    +company: ?{|
      +$fragmentRefs: CompanyFragment_company$ref
    |},
  |}
|};
export type CurrentUserQueryRendererQuery = {|
  variables: CurrentUserQueryRendererQueryVariables,
  response: CurrentUserQueryRendererQueryResponse,
|};
*/


/*
query CurrentUserQueryRendererQuery {
  currentUser {
    id
    email
    employee {
      ...EmployeeFragment_employee
      id
    }
    company {
      ...CompanyFragment_company
      id
    }
  }
}

fragment EmployeeFragment_employee on Employee {
  id
  fullName
  fullAddress
  salary
  isAdmin
  company {
    name
    id
  }
  department {
    name
    id
  }
}

fragment CompanyFragment_company on Company {
  id
  name
  employees {
    id
    ...EmployeeRowFragment_employee
  }
}

fragment EmployeeRowFragment_employee on Employee {
  id
  fullName
  fullAddress
  salary
  isAdmin
  company {
    name
    id
  }
  department {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  v2,
  v0
],
v4 = [
  v0,
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
    "selections": v3
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "department",
    "storageKey": null,
    "args": null,
    "concreteType": "Department",
    "plural": false,
    "selections": v3
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CurrentUserQueryRendererQuery",
  "id": null,
  "text": "query CurrentUserQueryRendererQuery {\n  currentUser {\n    id\n    email\n    employee {\n      ...EmployeeFragment_employee\n      id\n    }\n    company {\n      ...CompanyFragment_company\n      id\n    }\n  }\n}\n\nfragment EmployeeFragment_employee on Employee {\n  id\n  fullName\n  fullAddress\n  salary\n  isAdmin\n  company {\n    name\n    id\n  }\n  department {\n    name\n    id\n  }\n}\n\nfragment CompanyFragment_company on Company {\n  id\n  name\n  employees {\n    id\n    ...EmployeeRowFragment_employee\n  }\n}\n\nfragment EmployeeRowFragment_employee on Employee {\n  id\n  fullName\n  fullAddress\n  salary\n  isAdmin\n  company {\n    name\n    id\n  }\n  department {\n    name\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CurrentUserQueryRendererQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentUser",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v0,
          v1,
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
                "kind": "FragmentSpread",
                "name": "EmployeeFragment_employee",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "company",
            "storageKey": null,
            "args": null,
            "concreteType": "Company",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CompanyFragment_company",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CurrentUserQueryRendererQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentUser",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "employee",
            "storageKey": null,
            "args": null,
            "concreteType": "Employee",
            "plural": false,
            "selections": v4
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "company",
            "storageKey": null,
            "args": null,
            "concreteType": "Company",
            "plural": false,
            "selections": [
              v0,
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "employees",
                "storageKey": null,
                "args": null,
                "concreteType": "Employee",
                "plural": true,
                "selections": v4
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e76976ec27331437ba9f76ffb1190112';
module.exports = node;
