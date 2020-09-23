import React from 'react';

const One = () => <h1>Content of page 1</h1>;
const Two = () => <h1>Content of page 2</h1>;
const Three = () => <h1>Content of page 3</h1>;
const Four = (props) => {
    console.log("four",props)
    return (<h1>Content of page 4</h1>)
};

export { One, Two, Three, Four };