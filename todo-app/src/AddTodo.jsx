import React, {Component, PropTypes}  from 'react';


export default class AddTodo extends Component {

    static propTypes = {
        onAddTodo: PropTypes.func.isRequired
    }

    handleClick() {
        console.log("todo click");
        const todo = {
            text: this.refs.todo.value
        }

        this.props.onAddTodo(todo);

        this.refs.todo.value = "";

    }

    render() {
        return (
            <div>
                <input ref="todo" type="text" placeholder="todo"/>
                <input onClick={this.handleClick.bind(this)} type="submit"/>
            </div>
        )
    }
}