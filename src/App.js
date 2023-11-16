import React from 'react'
import Button from './Button'


const App = () => {
    const handleClickAction = () => {
        console.log('Clicked from the parent')
    }
    return <>
        <Button data = {{a:{b:{c:'a'}}}} clickAction = {handleClickAction}>Click me</Button> {/*  inside this component is a children */}
    </>;
}

export default App;  // a module can have one default export

export {App} //named export need name import