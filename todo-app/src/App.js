import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {text: "mittagessen"},
                {text: "kaffee"}
            ]
        };

        //function binding => schoener
        this.handleAddToDo = this.handleClick.bind(this);
    }

    handleClick(todo) {
        console.log("todo click");

        const todos = this.state.todos;
        todos.push(todo);

        this.setState({
            todos
        })
    }

    handleTodoDone(todo) {
        console.log(todo);

        const todos = this.state.todos;
        const newTodos = [];

        todos.forEach((t) => {
            if (t !== todo) {
                newTodos.push(t)
            }
        })

        this.setState({
            todos: newTodos
        });

    }

    render() {
        return (
            <div className="App">
                <h1>todo</h1>
                <AddTodo onAddTodo={this.handleAddToDo}/>

                <TodoList todos={this.state.todos} onTodoDone={this.handleTodoDone.bind(this)}/>

            </div>
        );
    }
}

export default App;
