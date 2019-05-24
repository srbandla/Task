import React, { Component } from 'react';

class Component1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <h1> This is Component1  </h1>
               {
                this.props.toCmp1.map( (el) =>(
                  <h3 key={el.id}>
                  <button  onClick = {() =>this.props.selectCustomer(el.id)} >
                    {el.name} 
                  </button>
                  </h3>
          
                ))  
               }
            </div>
         );
    }
}
 
export default Component1;