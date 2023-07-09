// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component{
    state={count:0}
    getRandomNumber=()=>Math.ceil(Math.random()*100)
    onIncrement=()=>{
        const randomNumber=this.getRandomNumber()
        this.setState((prevState)=>({count:prevState.count+randomNumber})
    )}
    render(){
        const {count}=this.state
        const evenOrOdd = count%2===0 ? 'Even': 'Odd'
        return(
            <div className="counter-container">
                <div className="counter-card-container">
                <h1 className="count-heading">Count {count}</h1>
                <p className="count-sub-heading">Count is {evenOrOdd}</p>
                <button className="increment-button" type="button" onClick={this.onIncrement}>Increment</button>
                <p className="desc">*Increase By Random Number Between 0 to 100</p>
                </div>
            </div>
        )
    }
}

export default EvenOddApp


