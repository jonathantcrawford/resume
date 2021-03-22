import React from 'react';

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";


const DBQueryResult = (props: any) => {
    const {data, loading, error} = useQuery(gql(props.query));
    if (loading) return (<div>loading from db</div>);
    if (data && props.render) return props.render({data, loading, error})
    return (<code>{JSON.stringify(data)}</code>);
}
export default DBQueryResult;