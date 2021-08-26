import TaskList from '../components/tasks/TaskList';
import {useEffect, useState} from "react";
import axios from "axios";

function ActiveTasksPage() {
    const [tasks, setTasks] = useState([]);

    const loadActiveTasks = async () => {
        try {
            const response = await axios.get(
                '/api/tasks'
            )
            setTasks(response.data);

        } catch (error) {
            console.error(error)
        }
    };

    useEffect(async () => {
        await loadActiveTasks();
    }, []);

    return (
        <div className="tasks-container">
            <TaskList tasks={tasks}/>
        </div>
    )
}

export default ActiveTasksPage;
