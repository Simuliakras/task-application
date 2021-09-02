import TaskList from '../components/tasks/TaskList';
import React, {useEffect, useState} from "react";
import NewTask from "../components/Modal";
import axios from "axios";

function ActiveTasksPage() {
    const [modalShow, setModalShow] = useState(false);
    const [activeTasks, setActiveTasks] = useState([]);
    const [updateTasks, setUpdateTasks] = useState(false);

    const updateList = () => {
        setUpdateTasks(true);
    }

    useEffect(() => {
        axios.get('/api/tasks')
            .then(res => {
                setActiveTasks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setUpdateTasks(false);
    }, [updateTasks]);

    return (
        <div className="active-tasks">
            <div className="add-new-task">
                <div className="plus-button">
                    <a href="#" onClick={() => setModalShow(true)}>
                        <img src="/images/plus.png" alt="Add task icon"></img>
                    </a>
                </div>
                <NewTask
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    onSubmit={updateList}
                />
            </div>
            <div className="tasks-container">
                <TaskList tasks={activeTasks}/>
            </div>
        </div>
    )
}

export default ActiveTasksPage;
