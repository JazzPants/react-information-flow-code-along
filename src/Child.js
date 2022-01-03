import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    console.log(this.props)
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color}}>

        </div>
    )
  }
}
//LAB NOTE:
//Now that the function colorChange takes in an argument, we'll need to update the onClick of Child to be
//a function that invokes this.props.handleColorChange and passes in a random color as the argument:


//with out () => "we get maximum depth reached" - infinite render loop
//function is immediately called/invoked! First we need to refer to the callback function through an event/change handler function (onClick={()=>...})
//(in this case an anonymous function() => ),  to stop the instant looping!

//call the handleColorChange prop passed from "Parent.js" by using this.props.handleColorChange
//console.log(this.props) this.props is an Object function
//this.props.handleColorChange = {this.changeColor} !! which invokes changeColor function

export default Child
