import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title, id } = this.props.item;
        return (
           <li className="list-group-item text-capitalize
           d-flex justify-content-between my-2">
               <h6>{title}</h6>
               <div className="todo-icon">
                   <span className="mx-2 text-success">
                       <i className="fas fa-edit"></i>
                    </span>
                   <span className="mx-2 text-danger" onClick={this.props.delTodo.bind(this, id)}>
                       <i className="fas fa-trash"></i>
                    </span>
               </div>
           </li>
        )
    }
}

