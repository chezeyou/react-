import React,{Component} from 'react';
import './Todolist.less';
class Todo_input extends Component{
    constructor() {
        super();
        this.state={

        }
    }

    render() {
        return (
            <div className="todo_input">
                <input type="text"/>
            </div>
        )
    }
}


class Todolist extends Component {
    constructor() {
        super();
        this.state= {

        }
    }

    render() {
        return (
            <div className="todolist">
                <Todo_input></Todo_input>
            </div>
        )
    }

}