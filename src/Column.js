import React from 'react';
import Card from "./Card";

const Column = (props) => {
    return (
        <div className="col">
           <h3>{props.status.title.toUpperCase()}</h3>
            {props.tasks.filter(task =>
                task.status === props.status.title)
                .map(task =>
            <Card
            key={task._id}
            task={task}
            changePriority={props.changePriority}
            priorities={props.priorities}
            changeStatus={props.changeStatus}
            statuses={props.statuses}
            />)}
        </div>
    );
};

export default Column;