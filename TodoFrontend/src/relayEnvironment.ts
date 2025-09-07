import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import type { RequestParameters, Variables } from 'relay-runtime';

async function fetchGraphQL(request: RequestParameters, variables: Variables) {
  const response = await fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return await response.json();
}

export function createEnvironment() {
  return new Environment({
    network: Network.create(fetchGraphQL),
    store: new Store(new RecordSource()),
  });
}

export const environment = createEnvironment();
