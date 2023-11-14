const child1 = "hi i am child1";
const child2 = "hi i am child2";

const div = React.createElement('div',{className : 'text'},[child1,child2]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);