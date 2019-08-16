import React from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect}  from 'react-router-dom'
import Home from '../page/home/Home';
import NotFond from '../page/404/404'

//render 下面要有根节点，但是在定义路由时，根节点外层需要嵌套 BrowserRouter（可用as重定义）
class all extends React.Component{
    render(){
        return(
           <Router>
               <div>
                   <Switch>
                        <Route exact={true} path='/'>
                            <Redirect to='/home'></Redirect>
                        </Route>
                        <Route exact={true} path='/home' component={Home}></Route>
                        {/* <Route path='/home' render={(props)=>{
                            return(
                                 <Home {...props}>
                                    <Switch>
                                        <Route path='/home/catecory' component={catecory}></Route>
                                        <Route path='/home/push' component={push}></Route>
                                        <Route path='/home/cart' component={cart}></Route>
                                        <Route path='/home/my' component={my}></Route>
                                        <Route  component={NotFond}></Route>
                                    </Switch>
                                </Home>
                            )
                        }} ></Route>  */}
                        {/* <Route path='/login/:id' render={(props)=>{
                            return(
                                 <Home {...props}>
                                    <Switch>
                                        <Route path='/admin/line1' component={Line1}></Route>
                                        <Route  component={NotFond}></Route>
                                    </Switch>
                                </Home>
                            )
                        }} ></Route>  */}
                        <Route  component={NotFond}></Route>
                   </Switch>   
               </div>    
           </Router>
            )
    }
}
export default all;