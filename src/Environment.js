// @flow

import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';



// NOTE: Hack'd because this is exercise, otherwise would be ENV config
// const url = "http://localhost:3000/graphql";
const url = "https://matt-patient-iq.herokuapp.com/graphql";


function fetchQuery(operation, variables) {

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // NOTE: Hack'd auth because this is exercise
  const email = localStorage.getItem("email")
  if (email) {
    headers.Authorization = email;
  }
  console.log("---- Headers ----");
  console.log(headers);
  console.log("---- ----");

  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}


const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})


export default modernEnvironment;
