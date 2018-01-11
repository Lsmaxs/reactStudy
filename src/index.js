import Library from './library';
import React from  "react";
import ReactDOM   from  "react-dom";
import {AppContainer} from 'react-hot-loader';

const mountNode = document.getElementById("app");
const renders = (Component) => {
    ReactDOM.render((
        <AppContainer>
            <Component/>
        </AppContainer>
    ), mountNode);
};
renders(Library)

if (module.hot) {
    console.log(ReactDOM);
    module.hot.accept('./library', (err)=> {
        if (err) {
            console.log(err);
        }
        const NextApp = require('./library').default;
        // 从DOM 中移除已经挂载的 React 组件 然后重装
        ReactDOM.unmountComponentAtNode(mountNode);
        renders(NextApp);
    })
}
