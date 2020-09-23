import React from 'react';
import { Route } from 'react-router-dom';

// Layout work
function RouteWrapper({
    component: Component,
    layout: Layout,
    ...rest
}) {

    // console.log("props")

    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}
export default RouteWrapper;