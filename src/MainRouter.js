import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Links from './Links';
import Routes1 from './Routes1';
import Routes2 from './Routes2';
import { One, Two, Three, Four } from './router/pages';

function MainRouter(props) {
    return (

        <Router >

            <Switch>
                <Route path="/" component={Links} exact />

                <Route exact>
                    <Route component={Routes1} />
                    <Route component={Routes2} />
                </Route>


                {/* <Route component={Routes1}></Route>
                <Route component={Routes2}></Route> */}
                {/* <Route path='/' component={Links} exact />
                <Route path='/one' component={One} />
                <Route path='/two' component={Two} />
                <Route path='/three' component={Three} />
                <Route path='/four' component={Four} /> */}
                {/* <Routes1 />
                <Routes2 /> */}

                <Route path="*">
                    <h1>Eşleşmedi</h1>
                </Route>

                {/* <Redirect from="*" to="/" /> */}
            </Switch>
        </Router>

        // <Router >

        //     <Switch>
        //         <Route path="/" component={Links} exact />

        //         <Routes1 />

        //         {/* <Route path="/one" component={One} />
        //         <Route path="/two" component={Two} /> */}



        //         <Route path="/three" component={Three} />


        //         {/* <Route path="*">
        //             <Redirect to="/one" />
        //         </Route> */}
        //         {/* <Route path="*">
        //             <h1>Eşleşmedi</h1>
        //         </Route> */}

        //     </Switch>

        //     {/* <Switch >
        //         <Route>
        //             <Routes1 />
        //             <Routes2 />
        //         </Route>
        //     </Switch> */}


        //     {/* <Route component={Links}>
        //         <Route path="/ajanda" component={One} title="Ajanda" />
        //         <Route path="/mukellef">
        //             <Route path="genel-bilgileri" component={Two} title="Mükellef Genel Bilgileri" />
        //         </Route>
        //     </Route> */}



        // </Router>
    )
}
export default MainRouter;



