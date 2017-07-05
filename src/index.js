import Library from './library';
import React from  "react";
import {render} from  "react-dom";

class App extends React.Component{
    constructor(...prop){
        super(...prop);
    }
    render(){
        <div className="header">react learn</div>
    }
}

render(<App />,document.getElementById("app"));

if (module.hot) {
    module.hot.accept('./library', function() {
        console.log('Accepting the updated library module!');
        Library.log();
        document.write("dfasdf11112O111")
    })
}