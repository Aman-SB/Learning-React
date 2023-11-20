import React , {useState} from 'react'


const App = () => {
    const [value,updateValue] = useState(1);
    console.log("before value" , value);
    const handleClick = () => {
        //in this callback funtion we can send the prev value to the function to check for the old value
        updateValue((prevValue) => {
            return prevValue + 1;
        })
    }
    console.log("after value" , value);
    return <>
        <button onClick={handleClick}>btn</button>
    </>;
}

export default App;  // a module can have one default export

export {App} //named export need name import