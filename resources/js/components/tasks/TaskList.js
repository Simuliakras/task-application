import TaskItem from "./TaskItem";

function TaskList(props) {
    return (
        <section>
            <div id="cards-container">
                {props.tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        createDate={task.created_at}
                    />
                ))}
            </div>
        </section>
    );
}

export default TaskList;
