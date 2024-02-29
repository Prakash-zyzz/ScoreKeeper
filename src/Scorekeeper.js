import React, { Component } from "react";

class Scorekeeper extends Component{
    constructor(props){
        super(props);
        this.state= {
            score:0
        }
        this.increase=this.increase.bind(this);
        this.threeIncrease=this.threeIncrease.bind(this);
    }

    increase(){
               this.setState( {score:this.state.score+1})
    }

    // threeIncrease(){
    //            this.setState( {score:this.state.score+3})
    // }

    // threeIncrease(){
    //   this.setState(st=>{return{score:st.score+1}})
    //   this.setState(st=>{return{score:st.score+1}})
    //   this.setState(st=>{return{score:st.score+1}})
    // }

    incrementScore(custate){
        return{score:custate.score+1}
    }
   
    threeIncrease(){
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }


    render(){
        return(
            <div>
            <h1>No of kills:{this.state.score}</h1>
            <button onClick={this.increase}>kill!</button>
            <button onClick={this.threeIncrease}>kill!</button>
            </div>
        )
    }
} 

export default Scorekeeper;