import React from 'react'

class RouletteGun extends React.Component {
    
    static defaultProps = {
        spinningTheChamber: false
    }

    state = {
        message: 'Safety Off',
        bulletInChamber: 8,
        chamber: null
    }

    calculateMessage() {
        if (this.state.bulletInChamber === this.state.chamber) {
            this.setState( 
                {message: 'BANG!!!!'}
            )} else {
            console.log('No Fire')
            }
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
            spinningTheChamber: true},
        )
        setTimeout(() => {
            this.setState(
                {chamber: Math.ceil(Math.random() * 8),
                 spinningTheChamber: false}
            )
            console.log(this.state)}, 2000)
        calculateMessage()
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


// this.setState( 
//     {message: "you're safe!"}
//     )

// this.setState( 
//     {message: 'BANG!!!!'}
//     )