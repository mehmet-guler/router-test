import React from 'react';
import { Route } from 'react-router-dom'
import { Three, Four } from './router/pages';

function Routes2(props) {
    console.log("Routes2", props)
    return (
        <>
            <Route path="/three" component={Three} />
            <Route path="/four" component={Four} />
        </>
    );
}

export default Routes2;
