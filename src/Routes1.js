import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { One, Two } from './router/pages';

function Routes1(props) {
    console.log("Routes1", props)
    return (

        <>
            <Route path={'/one'} exact={true} component={One} />
            <Route path={'/two'} exact={true} component={Two} />
            {/* <Route path={match.url} exact={true} component={One} /> */}
            {/* <Route path={match.url+'/two'} exact={true} component={Two} /> */}
            {/* <Route path={`${match.url}/careers`} exact={true} component={careers} /> */}
        </>

        // <>
        //     <Route path="/one" component={One}  />
        //     <Route path="/two" component={Two}  />
        // </>
    );
}

export default Routes1;
