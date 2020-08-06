import React from 'react';
import { Link } from 'react-router-dom';


class Menu extends React.Component {

    id=1

    render() { 
        return ( 
            <div>
                <Link to='/'>Home</Link>
                &nbsp;
                <Link to='/about'>About</Link>
                &nbsp;
                <Link to='/addfriend'>Add Friend</Link>
                &nbsp;
                <Link to='/lifecycle'>Lifecycle</Link>
                &nbsp;
                <Link to='/blogs'>Blogs</Link>
           


            </div>
         );
    }
}
 
export default Menu;