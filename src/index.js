import Library from './library';
import React from  "react";
import { render } from  "react-dom";
import "./test.css"



render(<Library />,
    document.getElementById('app')
);
if (module.hot) {
    module.hot.accept('./library', function() {
        render(<Library />,document.getElementById("root"));
    })
}