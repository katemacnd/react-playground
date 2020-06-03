import React from 'react'

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Safety Off',
            chamber: null,
            spinningTheChamber: false
            }
        console.log(props)
        console.log(this.state)
        }
        
        componentDidMount() {
            console.log('componentDidMount')
        }

        handleButtonClick() {
            console.log('button clicked')
            this.setState({message: 'Bang'},
            {spinningTheChamber:true})
        }

        render() {
            return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.handleButtonClick}>Pull Trigger!</button>
            </div> )
        }

        
    }

export default RouletteGun


// spinning the chamber and pulling the trigger! ...
// you're safe!
// BANG!!!!