import React from "react";
import {render} from "react-dom";
import {browserHistory} from "react-router";
import {AppContainer} from "react-hot-loader";
import Root from "src/containers/Root";

/*import "react-fastclick"*/

const store = configureStore();
const history = ""
render(<Root store={store} history={history}/>, document.getElementById("app"));
if(module.hot){
    module.hot.accept("../src/containers/Root",()=>{
        render(<AppContainer><Root store={store} history={history}/></AppContainer>, document.getElementById("app"));
    })
}