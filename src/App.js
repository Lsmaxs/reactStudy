import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin"
import Liber from "./library"

class App extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div>
              loading...
                <Liber/>
            </div>
        )
    }
}

export default App