import React, { Component } from "react";
import Container from "../components/Container";
import InputTodo from "../components/InputTodo";
import MainContainer from "../components/MainContainer";
import TodoItem from "../components/TodoItem";

import './ToDoList.css'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    text: 'Lorems',
                    done: false
                },
                {
                    text: 'Lorems 2',
                    done: true
                }
            ],
            indexEdit: -1
        }
    }

    handleSubmitTodo = (text) => {
        let data = {text, done: false}
        let todos = this.state.todos
        todos.push(data)
        this.setState({todos: todos})
    }

    handleEditTodo = (index) => {
        this.setState({indexEdit: index})
    }

    handleSubmitEditTodo = (text) => {
        let todos = this.state.todos
        this.setState({indexEdit: this.state.indexEdit})
        todos[this.state.indexEdit].text = text
        this.setState({todos: [...todos], indexEdit:-1})
    }

    handleDelTodo = (idx) => {
        let todos = this.state.todos
        todos.splice(idx, 1)
        this.setState({todos})
    } 

    handleCheckClick = (index) => {
        let todos = this.state.todos
        todos[index].done = !todos[index].done
        this.setState({todos: [...todos]})
    }

    renderListTodo = () => 
        this.state.todos.map((todo, i) => {
            if ( i === this.state.indexEdit && this.state.indexEdit !== -1 ) {
                return (
                    <div className="todo">
                        <InputTodo
                            key={i}
                            placeholder={''}
                            onSubmit={this.handleSubmitEditTodo}
                            defaultValue={todo.text}
                        />
                    </div>
                )
            }
            return (
                <TodoItem
                    key={i}
                    todo = {todo}
                    index={i}
                    onDelTodo={this.handleDelTodo}
                    onEditTodo={this.handleEditTodo} 
                    onCheckClick={this.handleCheckClick}
                />
            )
        })
    

    render() { 
        return (
            <MainContainer>
                <Container>
                    <h1 className="text-upper">ToDo List</h1>
                    <InputTodo
                        onSubmit={this.handleSubmitTodo}
                        placeholder='What need to be done today?'
                    />
                    {/* Breadcrumbs */}
                    {/* List Todo */}
                    <div className="list-todo mt-5">
                        {this.renderListTodo()}
                    </div>
                </Container>
            </MainContainer>
        );
    }
}
 
export default ToDoList;