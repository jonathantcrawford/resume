import React from 'react';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Text from '../components/basic/Text';


const DBQueryResult = (props: any) => {
    const {data, loading, error} = useQuery(gql(props.query));
    if (loading) return (<Text>loading from db</Text>);
    if (data && props.render) return props.render({data, loading, error})
    return (<code>{JSON.stringify(data)}</code>);
}
export default DBQueryResult;