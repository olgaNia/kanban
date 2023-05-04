import React, {useState} from 'react';
import EditTaskModal from "./EditTaskModal";
import DeleteTaskModal from "./DeleteTaskModal";

const Card = (props) => {
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const toggleEdit = () => {
        setModalEdit(!modalEdit)
    };
    const toggleDelete = () => {
        setModalDelete(!modalDelete)
    };
    const priorityToWord = (number) => {
        switch (number) {
            case 1:
            case 2:
            case 3:
                return "low";
            case 4:
            case 5:
            case 6:
                return "medium"
            case 7:
            case 8:
            case 9:
            case 10:
                return "high"
            default:
                return "low"
        }
    }
    return (
        <div className="card" style={{marginBottom: '10px'}}>
            <div className="card-body">
                <h5 className="card-title">{props.task.name}</h5>
                <p className="card-text">{props.task.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <button
                        onClick={() => props.changeStatus(props.task._id, props.task.status, -1)}
                        disabled={props.statuses[0] === props.task.status}
                        type="button"
                        className="btn btn-outline-info">
                        ←
                    </button>
                    {' '}
                    {props.task.status}
                    {' '}
                    <button
                        onClick={() => props.changeStatus(props.task._id, props.task.status, 1)}
                        disabled={props.statuses[props.statuses.length - 1] === props.task.status}
                        type="button"
                        className="btn btn-outline-info">
                        →
                    </button>
                </li>
                <li className="list-group-item">
                    Priority: {props.task.priority} {priorityToWord(+props.task.priority)}{' '}
                    <button
                        onClick={() => props.changePriority(props.task._id, +props.task.priority + 1)}
                        disabled={props.priorities[props.priorities.length - 1] === +props.task.priority}
                        type="button"
                        className="btn btn-outline-primary btn-sm">
                        ↑
                    </button>
                    <button
                        onClick={() => props.changePriority(props.task._id, +props.task.priority - 1)}
                        disabled={props.priorities[0] === +props.task.priority}
                        type="button"
                        className="btn btn-outline-primary btn-sm">
                        ↓
                    </button>
                </li>
            </ul>
            <div className="card-body">

                <button
                    onClick={toggleEdit}
                    type="button"
                    className="btn btn-outline-warning">
                    Edit
                </button>
                <button onClick={toggleDelete}
                        type="button"
                        className="btn btn-outline-danger">
                    Delete
                </button>

                <EditTaskModal
                    toggleEdit={toggleEdit}
                    modalEdit={modalEdit}
                    priorities={props.priorities}
                    statuses={props.statuses}
                    task={props.task}
                    editTask={props.editTask}
                />
                <DeleteTaskModal
                    toggleDelete={toggleDelete}
                    modalDelete={modalDelete}
                    deleteTask={props.deleteTask}
                    task={props.task}
                />

            </div>
        </div>
    );
};

export default Card;