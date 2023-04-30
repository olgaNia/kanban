import axios from 'axios';
import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Column from "./Column";
import CreateTaskModal from "./CreateTaskModal";

function App() {
    const [statuses, setStatuses] = useState([])
    const [tasks, setTasks] = useState([])
    const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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

    function changePriority(id, newPriority) {

        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {priority: newPriority})
            .then(res => getTasks())
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getStatuses()
        getTasks()
    }, [])

    function changeStatus(id, currentStatus,direction) {

        const newStatuses = statuses.map(status => status.title)
        const currentIndex = newStatuses.indexOf(currentStatus)
        const newIndex= currentIndex+direction
        const newStatus = newStatuses[newIndex]

        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`,{status:newStatus})
            .then(res=> getTasks())
            .catch(err=> alert('Try again later'))
    }

   function createTask(newTask){
        axios.post(`https://expressjs-server.vercel.app/tasks`,newTask)
            .then(res=> getTasks())
            .catch(err=> alert('Try again later'))
    }



    return (
        <div className="App">
            <div className="container text-center">
                <h1>Kanban board</h1>
              <CreateTaskModal
                  priorities={priorities}
                  statuses={statuses.map(status => status.title)}
                  createTask={createTask}
              />
                <div className="row align-items-start">
                    {statuses.map(status =>
                        <Column
                            key={status._id}
                            status={status}
                            tasks={tasks}
                            changePriority={changePriority}
                            priorities={priorities}
                            changeStatus={changeStatus}
                            statuses={statuses.map(status => status.title)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
