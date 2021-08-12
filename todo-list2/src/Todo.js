import React from 'react';


const Todo = (props) => {

    return (
    
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden="true"
            //    callback function
                    onClick={() =>
                    props.onSelect(props.id)}
                />
                <li>{props.text}</li>
            </div>
      
    );
};

export default Todo;