import React from 'react';
import axios from "axios";
import Blog from './blog';


class Blogs extends React.Component {
 
    constructor(props){
        super(props)
        this.state={
            allblogs:[]
        }
    }

    componentWillMount(){
        this.getBlogs()
    }

   /*  getBlogs(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
                .then(function(response){
                    console.log(response)
                    console.log(response.data)
                    this.
                }, function(error){
                    console.log(error)
                })
    }
 */

    getBlogs(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                this.setState({allblogs: response.data})
                console.log(this.state.allblogs)
            }, (error)=>{
                console.log(error)
            })
    }

    deleteBlogWithId=(id)=>{
        console.log('deleteBlogWithId called!!!! for id: ' + id)
        //this.setState({allblogs: })
        var tempAllBlogs = this.state.allblogs.filter(blog=>{
            return blog.id !== id
        })
        console.log(tempAllBlogs)
        this.setState({allblogs: tempAllBlogs})

    }


    renderBlogs=()=>{
        console.log('in renderBlogs')
        return (
                this.state.allblogs.map(blog=>{
                    return (
                        <Blog  
                            key={blog.id}  
                            id={blog.id} 
                            title={blog.title} 
                            body={blog.body}
                            deleteId={this.deleteBlogWithId}>

                        </Blog>
                    )
                })
            )
    }

    render() { 
        return ( 
            <div>
                <h1>List of blogs from rest api!!!!</h1>
                {this.renderBlogs()}
               
            </div>
         );
    }
}
 
export default Blogs;