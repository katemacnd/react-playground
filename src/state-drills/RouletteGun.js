import React from 'react'

class RouletteGun extends React.Component {
    
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        message: 'Safety Off',
        chamber: null,
        spinningTheChamber: false,
        }

    componentDidMount() {
        console.log('componentDidMount')
        console.log(this.props)
        console.log(this.state)
    }

    handleButtonClick() {
        console.log('button clicked')
        this.setState(
            {message: 'Trigger Pulled!',
            spinningTheChamber:true})
    }

    render() {
        return (
        <div>
            <p>{this.state.message}</p>
            <button onClick={this.handleButtonClick.bind(this)}>Pull Trigger!</button>
        </div> )
    }
    }

export default RouletteGun


// spinning the chamber and pulling the trigger! ...
// you're safe!
// BANG!!!!