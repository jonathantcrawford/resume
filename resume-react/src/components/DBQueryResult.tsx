import React from 'react';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import Loader from '../components/loaders/Loader';


/**
 * Could refactor as a HoC?
 */

const DBQueryResult = (props: any) => {
    const {data, loading, error} = useQuery(gql(props.query));
    if (loading) return (<Loader themed text="loading from db"/>);
    if (data && props.render) return props.render({data, loading, error})
    return (<code>{JSON.stringify(data)}</code>);
}
export default DBQueryResult;