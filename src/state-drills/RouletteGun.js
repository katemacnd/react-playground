import React from 'react'

class RouletteGun extends React.Component {
    
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
        this.setState(
            {spinningTheChamber: true},
        )
        setTimeout(() => {
            this.setState(
                {chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false}
            )}, 2000
        )
    }

    renderDisplay() {
        if (this.state.spinningTheChamber=true) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (this.props.bulletInChamber === this.state.chamber) {
            return ('BANG!!!!')
        } else {
            return 'you\'re safe!'
        }
    }

    render() {
        return (
        <div>
            <p>{this.renderDisplay()}</p>
            <button onClick={this.handleButtonClick.bind(this)}>Pull Trigger!</button>
        </div> )
    }
    }

export default RouletteGun
