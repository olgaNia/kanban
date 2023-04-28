import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{marginBottom:'10px'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.task.name}</h5>
                    <p className="card-text">{props.task.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.task.status}</li>
                    <li className="list-group-item">Priority: {props.task.priority}{' '}
                        <button
                            onClick={()=>props.changePriority(props.task._id,+props.task.priority+1)}
                            type="button"
                            className="btn btn-outline-primary btn-sm">↑</button>
                        <button
                            onClick={()=>props.changePriority(props.task._id,+props.task.priority-1)}
                            type="button"
                            className="btn btn-outline-primary btn-sm">↓</button>
                    </li>

                </ul>
                <div className="card-body">
                    <button type="button" className="btn btn-outline-info">←</button>
                    <button type="button" className="btn btn-outline-warning">Update</button>
                    <button type="button" className="btn btn-outline-danger">Delete</button>
                    <button type="button" className="btn btn-outline-info">→</button>
                </div>
        </div>
    );
};

export default Card;