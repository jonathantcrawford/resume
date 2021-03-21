import React from 'react';

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";


const DBQueryResult = (props: any) => {
    const {data, loading, error} = useQuery(gql(props.query))
    return (<code>{JSON.stringify(data)}</code>);
}
export default DBQueryResult;