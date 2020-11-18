import React from 'react';

const var1="my name is pankaj"
function Header(){
    return(
        <h1>Hi this is header</h1>
    );
}

function Header2(){
    return <h2>This is header2</h2>;
}

function add(a,b){
    let div=a/b;
    div.toFixed(2); //for showing only two digit after decimal
    return div; 
}
export default Header;
export {var1,Header2,add};