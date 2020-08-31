import { createElement, Component, render } from './toy-react'
class Mycomponent extends Component {
    render() {
        return <div>
            <h1>my component</h1>
            {this.children}
        </div>
    }
}

render(<Mycomponent class="test" id="test1">
    <div>abc</div>
    <div></div>
    <div></div>
    <div></div>
</Mycomponent>, document.body)
