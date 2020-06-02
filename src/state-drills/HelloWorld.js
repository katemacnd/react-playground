import React from 'react'

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {who: 'world' }
        console.log('constructor')
        }
        
        componentDidMount() {
            console.log('componentDidMount')
        }

        handleButtonClick = (e) => {
            this.setState({who: e.target.innerText})
        }

        render() {
            return (<div>
                <p>Hello, {this.state.who}</p>
                <button onClick ={this.handleButtonClick}>World</button>
                <button onClick ={this.handleButtonClick}>Friend</button>
                <button onClick ={this.handleButtonClick}>React</button>
            </div> )
        }
    }   

export default HelloWorld