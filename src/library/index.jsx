import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin"
import "./index.scss"

class App extends React.Component {
    constructor(...props) {
        super(...props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div className="test">hello world!!12333</div>
        )
    }
}

export default App