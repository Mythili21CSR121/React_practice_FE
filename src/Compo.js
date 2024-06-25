import React, { Component } from "react";

export class Compo extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    increment=() =>{ 
        this.setState(prevState =>({
            count:prevState.count+1
        //    console.log(count);
        }))
           
        
    }
     render(){
        return(
            <>
                <button onClick={this.increment}>Increment</button>
                <span>{this.state.count}</span>
            </>
        )
    }
}