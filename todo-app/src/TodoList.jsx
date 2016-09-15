import React, {Component, PropTypes}  from 'react';

export default class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired
    };

    handleTodoDoneClick(event) {
        const target = event.target;
        console.log("done");
        const index = target.getAttribute("data-index");
        const todo = this.props.todos[index];

        this.props.onTodoDone(todo);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            {todo.text}
                            <button data-index={index} onClick={this.handleTodoDoneClick.bind(this)}>
                                erledigt
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}