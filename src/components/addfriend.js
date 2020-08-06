import React from 'react';
import axios from 'axios'

class AddFriend extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            friendname:'',
            friendsince:0
        }
    }


    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({friendname: event.target.value})

    }

    getSince=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({friendsince: event.target.value})
    }

    addFriend=()=>{
        console.log('Add friend via axios and post')
        let friendRequestBody = {
            "name": this.state.friendname,
            "since": this.state.friendsince
        }
        axios.post('http://localhost:3000/allfriends', friendRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/')
                }, error=>{
                    console.error(error);
                })
    }
    
    render() { 
      
        
        return (
            <div>
                <h3>Add Friend!!!!</h3>
                <form>
                    <label>Name: </label>
                    <input type='text' id="friendname" onChange={this.getName}></input>
                    <br></br>
                    <label>Since: </label>
                    <input type='number' id="friendsince" onChange={this.getSince}></input>
                    <br></br>
                    <button type="button" onClick={this.addFriend}>Add Friend</button>
                    <br></br>
                    <div>
                        <h4>Preview</h4>
                        Friend Name: {this.state.friendname}
                        <br></br>
                        Friend Since: {this.state.friendsince}
                        <br></br>
                    </div>
                    
                </form>
            </div>
          );
    }
}
 
export default AddFriend;