import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Friend from './friend';
import About from './about';
import AddFriend from './addfriend';
import LifeCycle from './lifecycle';
import Blogs from './blogs';
import EditFriend from './editfriend';

class Content extends React.Component {
    state = {  }
    render() { 
        return ( 

            <Switch>
                <Route path='/' exact component={Friend}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/addfriend' component={AddFriend}></Route>
                <Route path='/lifecycle' component={LifeCycle}></Route>
                <Route path='/blogs' component={Blogs}></Route>
                <Route path='/editfriend' component={EditFriend}></Route>
            </Switch>
         );
    }
}
 
export default Content;