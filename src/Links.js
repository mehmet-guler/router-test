import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Links() {
    return (
        <div>
            <h3>Content of main App component</h3>
            <ul>
                <li><Link to="/one">One</Link></li>
                <li><Link to="/two">Two</Link></li>
                <li><Link to="/three">Three</Link></li>
                <li><Link to="/four">Four</Link></li>
                <li><Link to="/no-match">No Match</Link></li>
            </ul>

        </div >
    );
}

export default Links;
