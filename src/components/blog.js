import React from 'react';


class Blog extends React.Component {
    state = {  }

    deleteThisBlog=()=>{
        console.log('delete this blog with id: ' + this.props.id)
        this.props.deleteId(this.props.id)
    }

    render() { 
        return (
            <span>
                <h2>{this.props.id}. {this.props.title}</h2>
                <p>{this.props.body}</p>
                <button>Edit</button> &nbsp;
                <button onClick={this.deleteThisBlog}>Delete</button>
            </span>
          );
    }
}
 
export default Blog;