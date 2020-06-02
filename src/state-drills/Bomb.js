import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 };
        console.log('constructor')
      }
      componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
            count: this.state.count + 1
          })
        }, 1000)
      }
      componentWillUnmount() {
        clearInterval(this.interval)
      }

      render() {
        console.log('render')
        if (this.state.count > 7)
            {return (<div>BOOM!!</div>)}
        else if (this.state.count %2 === 0) 
            {return (<div>Tick</div>)} 
        else
            {return (<div>Tock</div>)} 
        }   
      }
      

export default Bomb