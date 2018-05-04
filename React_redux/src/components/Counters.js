import React, {Component} from "react";
/* 选中的默认值 */
import PropTypes from 'prop-types';

class Counter extends Component{
    constructor(props){
        super(props);
        this.setState = {

        }
    }
    incrementIfOdd(){
        if(this.props.value % 2 == 0){
            this.props.onIncrement()
        }
    }
    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
      }
    
    render(){
        const { value, onIncrement, onDecrement } = this.props
        return (
            <div>
        <p>
                Clicked: {value} times
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button onClick={this.incrementIfOdd}>
                Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                Increment async
                </button>
      </p>
            </div>
        )
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }
export default Counter