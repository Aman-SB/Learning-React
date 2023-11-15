import React from 'react'
import ReactDOM from 'react-dom/client'

// const child1 = "hi i am child1";
// const child2 = "hi i am child2";

const isMorning = true
const light = 'hi it is light'
const dark = 'hi it is dark'

const handleClick = (state) => console.log("i was clicked" , state)
 

const morningText = <div>{light} <span onClick={() => handleClick(light)}>it is 8am</span></div>
const nightText = <div>{dark} <span>it is 8pm</span></div>
const mode = isMorning ? morningText : nightText

// const div = React.createElement('div',{className : 'text'},[child1,child2]);

const div = <div className='text'>{mode}</div> // jsx

// <> </>  this is fragmenet it is a type of emepty tag which help to wrap the tag
const Compo = () =>
<>
    {mode}
    here i can send component in the form of the element
</>



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Compo/>);
// if you want to render something it starting would we caps