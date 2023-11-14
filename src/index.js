import React from 'react'
import ReactDOM from 'react-dom'

const child1 = "hi i am child1";
const child2 = "hi i am child2";

// const div = React.createElement('div',{className : 'text'},[child1,child2]);

const div = <div className='text'>Hi i am Child</div> // jsx
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);