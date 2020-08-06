import React from 'react';


class LifeCycle extends React.Component {
    
    constructor(props){
        super(props)
        console.log('I am in constructor!!!!')
        this.state = {
            check:0
        }
    }

    componentWillMount(){
        console.log('component will be mounted in DOM')
        //alert()
    }
    
    componentDidMount(){
        console.log('component is mounted in DOM')
    }

    componentWillUpdate(){
        console.log('component will update, moment any state value changes!')
    }

    componentDidUpdate(){
        console.log('component has updated')
    }

    changeCheck=()=>{
        this.setState({check: this.state.check+1})
    }

    render() { 
        console.log('render called with check value as ' + this.state.check)
        return ( 
            <div>
                <h1> Component Life Cycle!!!!</h1>
                <button onClick={this.changeCheck}>Check +</button>
            </div>
         );
    }
}
 
export default LifeCycle;