import NewTask from "../components/Modal";
import TaskList from "../components/tasks/TaskList";
import React, {useEffect, useState} from "react";
import axios from "axios";

function CompletedTasksPage() {

    const [modalShow, setModalShow] = useState(false);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [updateTasks, setUpdateTasks] = useState(false);

    const updateList = () => {
        setUpdateTasks(true);
    }

    useEffect(() => {
        axios.get('/api/tasks?completed=1')
            .then(res => {
                setCompletedTasks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setUpdateTasks(false);
    }, [updateTasks]);

    return (
        <div className="completed-tasks">
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
                <TaskList tasks={completedTasks}/>
            </div>
        </div>
    )
}

export default CompletedTasksPage;
