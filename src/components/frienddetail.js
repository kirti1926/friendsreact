import React from 'react';
import Axios from 'axios';


class FriendDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
          
        }
       
    }

    deleteCurrentFriend=()=>{
        console.log("delete friend with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editFriendWithId=()=>{
        console.log("edit friend with id: " + this.props.id);
        this.props.editId(this.props.id)
    }
  
    incrementSinceCounter = ()=>{
        var since = parseInt(this.props.since) + 1;
        this.updateCounter(since)
        console.log(this.props.since,since)
    }

    decrementSinceCounter = ()=>{
        var since = this.props.since - 1;
        this.updateCounter(since)
        console.log(this.props.since,since)
    }
    updateCounter =(since)=>{
        var obj = {
            "name": this.props.name,
            "since": since
        }

        Axios.put('http://localhost:3000/allfriends/'+this.props.id, obj)
        .then(response=>{
            console.log(response);
            this.props.editCounter();
        }, error=>{
            console.error(error);
        })
    }
    render() { 
        return ( 
            <tr>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.props.since}</td>
                <td>
                    <button onClick={this.incrementSinceCounter}>Since + </button>
                </td>
                <td>
                    <button onClick={this.decrementSinceCounter}>Since - </button>
                </td>
                <td>
                    <button onClick={this.editFriendWithId}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteCurrentFriend}>Del</button>
                </td>
                
            </tr>    
        )
    }
       
}
 
export default FriendDetail;