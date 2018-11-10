// @flow

import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';

const mutation = graphql`
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
`;

const UpdateEmployeeMutation = (
  environment: any,
  employeeId: string,
  fullName: string,
  fullAddress: string,
  salary: number,
  completed: (isSuccess: boolean) => void,
) => {
  console.log('---- Update employee mutation ----');
  console.log(environment);
  console.log(employeeId);
  console.log(fullName);
  console.log(fullAddress);
  console.log(salary);
  console.log('---- ----');
  const variables = {
    input: {
      employeeId, fullName, fullAddress, salary: salary,
    },
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log('---- Update employee response ----');
        console.log(errors);
        console.log(response);
        console.log('---- ----');
        if (errors || !response.updateEmployee) {
          completed(response.updateEmployee);
        } else {
          completed(null);
        }
      },
      onError: (err) => {
        console.error(err);
        completed(null);
      },
    },
  );
};

export default UpdateEmployeeMutation;
