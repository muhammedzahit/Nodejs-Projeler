import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { gql, useQuery } from "@apollo/client";


export default function DelayedQuery() {
  const [dog, setDog] = useState(null);

  const GET_POST_DETAIL = gql`
		query gpd($id : ID!){
			post(id: $id) {
				title
				id
				description
			}
		}
	`;

  const [getDog, { loading, data }] = useLazyQuery(GET_POST_DETAIL);

  useEffect(() => {console.log(data)}, [data])

  return (
    <div>
      <button onClick={() => getDog({ variables: { id:"1" } })}>
        Click me!
      </button>
    </div>
  );
}