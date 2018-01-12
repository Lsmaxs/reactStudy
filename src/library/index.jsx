import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin"
import  s from "./style.scss"

class Libere extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div>
                <input type="checkbox"/>
                <div className={`${s.test}`} >22lo ld!!ff2ffffff</div>
                <div className={`${s.test1}`} >hello world!fff222fff</div>
                <div className={`${s.test3}`} >hrld!!fff322ffffff</div>
                <div className={`${s.test4}`} >hello322ffffeeff</div>
                <input type="checkbox"/>
            </div>
        )
    }
}

export default Libere