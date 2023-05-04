import React from 'react';
import Card from "./Card";

const Column = (props) => {
    return (
        <div className="col">
            <h3>{props.status.title.toUpperCase()}</h3>
            {props.tasks
                .filter(task => task.status === props.status.title)
                .sort((taskA,taskB)=> +taskA.priority-(+taskB.priority))
                .map(task =>
                    <Card
                        key={task._id}
                        task={task}
                        changePriority={props.changePriority}
                        priorities={props.priorities}
                        changeStatus={props.changeStatus}
                        statuses={props.statuses}
                        editTask={props.editTask}
                        deleteTask={props.deleteTask}
                    />)}
        </div>
    );
};

export default Column;