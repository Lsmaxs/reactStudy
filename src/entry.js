import App from './App';
import React from  "react";
import ReactDOM   from  "react-dom";
import {AppContainer} from 'react-hot-loader';

/*const FastClick = require('fastclick')

//解决移动端300毫秒延迟
FastClick.attach(document.body)*/

const mountNode = document.getElementById("app");
const renders = (Component) => {
    ReactDOM.render((
        <AppContainer>
            <Component/>
        </AppContainer>
    ), mountNode);
};
renders(App)

if (module.hot) {
    module.hot.accept('./App', ()=> {
        const NextApp = require('./App').default;
        /*// 从DOM 中移除已经挂载的 React 组件 然后重装
        ReactDOM.unmountComponentAtNode(mountNode);*/
        renders(NextApp);
    })
}
