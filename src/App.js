import axios from 'axios';
import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Column from "./Column";

function App() {
    const [statuses, setStatuses] = useState([])
    const [tasks, setTasks] = useState([])

    function getStatuses() {
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then(res => setStatuses(res.data))
            .catch(err => alert('Statuses are not defined'))
    }

    function getTasks() {
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then(res => setTasks(res.data))
            .catch(err => alert('Tasks are not defined'))
    }

    function changePriority(id,newPriority){
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`,{priority:newPriority})
            .then(res=>getTasks())
            .catch(err=>console.log(err))
                            }

    useEffect(() => {
        getStatuses()
        getTasks()
    }, [])

    return (
        <div className="App">
            <div className="container text-center">
                <h1>Kanban board</h1>
                <button type="button" className="btn btn-outline-success">Create new Task</button>
                <div className="row align-items-start">
                    {statuses.map(status =>
                        <Column
                            key={status._id}
                            status={status}
                            tasks={tasks}
                            changePriority={changePriority}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
