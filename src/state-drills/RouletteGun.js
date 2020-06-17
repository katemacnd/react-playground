import React, { Component } from 'react'

class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
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

        this.setState({spinningTheChamber:true}, () => {
            setTimeout(() => {
            let randomMath = Math.ceil(Math.random() * 8)
            console.log(randomMath)
            this.setState(
                {chamber: randomMath,
                spinningTheChamber: false}
            )}, 500
        )})
    }

    renderDisplay() {
        console.log(this.state.chamber)
        console.log(this.props.bulletInChamber)
        console.log(this.state.spinningTheChamber)
        console.log(this.props)
        if (this.state.spinningTheChamber===true) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (this.props.bulletInChamber === this.state.chamber) {
            return 'BANG!!!!'
        } else if ((this.state.chamber !== null) && (this.state.chamber !== this.props.bulletInChamber.toString())) {
            return 'you\'re safe!'
        } 
    }

    render() {
        console.log(this.state.spinningTheChamber)
        return (
        <div>
            <p>{this.renderDisplay()}</p>
            <button onClick={this.handleButtonClick.bind(this)}>Pull Trigger!</button>
        </div> )
    }
    }

export default RouletteGun
