import React from 'react';
import axios from 'axios';


class EditFriend extends React.Component {
   
    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
        //console.log(this.props.location.state.myid);
        this.state={
            name:'',
            since:0,
            id: 0
        }

    }

    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3000/allfriends/'+this.props.location.state.myid)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        name: response.data.name,
                        since:response.data.since,
                        id: response.data.id
                    })
                }, error=>{
                    console.error(error);
                })
        }
    }

    getSince=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({since: event.target.value})
    }

    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})

    }

    editFriend=()=>{
        console.log('Edit friend via axios and put')
        let friendRequestBody = {
            "name": this.state.name,
            "since": this.state.since
        }
        axios.put('http://localhost:3000/allfriends/'+this.state.id, friendRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/')
                }, error=>{
                    console.error(error);
                })
    }

    render() { 
        if(this.props.location.state === undefined){
            return (
                <div>
                    <h1>Pl. go to from home page!!!! </h1>
                </div>
            )
        }
        return ( 
            <div>
                <h1>Edit friend with id:{this.props.location.state.myid}  </h1>
                <div>
                <h3>Edit Friend!!!!</h3>
                <form>
                    <label>Id: </label>
                    <input type="text" value={this.state.id} readOnly></input>
                    <br></br>
                    <label>Name: </label>
                    <input type='text' id="friendname" value={this.state.name}  onChange={this.getName}></input>
                    <br></br>
                    <label>Since: </label>
                    <input type='number' id="friendsince" value={this.state.since}  onChange={this.getSince}></input>
                    <br></br>
                    <button type="button" onClick={this.editFriend}>Edit Friend</button>
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
            </div>
         );
    }
}
 
export default EditFriend;